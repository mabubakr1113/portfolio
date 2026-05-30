"use client";

import { useEffect, useState } from "react";

type State =
  | { kind: "loading" }
  | { kind: "ready"; count: number }
  | { kind: "unconfigured" }
  | { kind: "error" };

export default function VisitorCounter() {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    fetch("/api/visitors", {
      method: "POST",
      signal: controller.signal,
      cache: "no-store",
    })
      .then((r) => r.json())
      .then((data: { count: number | null; configured: boolean }) => {
        if (cancelled) return;
        if (data.configured === false) {
          setState({ kind: "unconfigured" });
        } else if (typeof data.count === "number") {
          setState({ kind: "ready", count: data.count });
        } else {
          setState({ kind: "error" });
        }
      })
      .catch(() => {
        if (!cancelled) setState({ kind: "error" });
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const display = (() => {
    switch (state.kind) {
      case "loading":
        return "—,———";
      case "ready":
        return state.count.toLocaleString("en-US");
      case "unconfigured":
        return "OFFLINE";
      case "error":
        return "—,———";
    }
  })();

  return (
    <span
      className="inline-flex items-center gap-1.5"
      aria-label={
        state.kind === "ready"
          ? `${state.count} readers`
          : "Visitor counter unavailable"
      }
    >
      Reader{" "}
      <span className="text-accent tabular-nums">
        #{display}
      </span>
    </span>
  );
}
