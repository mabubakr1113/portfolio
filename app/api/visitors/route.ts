import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

const COUNTER_KEY = "portfolio:visitors:total";
const COOLDOWN_SECONDS = 6 * 60 * 60; // 6 hours per IP

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function clientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for") || "";
  const ip = fwd.split(",")[0]?.trim();
  if (ip) return ip;
  return req.headers.get("x-real-ip") || "anon";
}

async function readCount(redis: Redis): Promise<number> {
  const raw = await redis.get<number | string>(COUNTER_KEY);
  if (typeof raw === "number") return raw;
  if (typeof raw === "string") return Number(raw) || 0;
  return 0;
}

export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null, configured: false });
  try {
    const count = await readCount(redis);
    return NextResponse.json({ count, configured: true });
  } catch {
    return NextResponse.json({ count: null, configured: true, error: true });
  }
}

export async function POST(req: NextRequest) {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null, configured: false });

  try {
    const ip = clientIp(req);
    const visitKey = `portfolio:visit:${ip}`;
    // SET with NX (only if absent) + EX (expiry). Returns "OK" if it set, null if existed.
    const fresh = await redis.set(visitKey, 1, {
      nx: true,
      ex: COOLDOWN_SECONDS,
    });

    let count: number;
    if (fresh === "OK") {
      count = await redis.incr(COUNTER_KEY);
    } else {
      count = await readCount(redis);
    }

    return NextResponse.json({
      count,
      configured: true,
      counted: fresh === "OK",
    });
  } catch {
    return NextResponse.json({ count: null, configured: true, error: true });
  }
}
