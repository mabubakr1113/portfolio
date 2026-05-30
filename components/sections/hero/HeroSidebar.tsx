"use client";

import dynamic from "next/dynamic";
import { HERO_STATS } from "@/constants";

const HeroRobot = dynamic(
  () => import("@/components/sections/hero/HeroRobot"),
  { ssr: false, loading: () => null }
);

export default function HeroSidebar() {
  return (
    <aside className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-8 mt-8 md:mt-2 text-center md:text-left">
      {/* Robot — modern AI agent, sits as the visual hook at the top of the sidebar */}
      <div
        className="rise relative frame-ink overflow-hidden"
        style={{ animationDelay: "0.3s" }}
      >
        <HeroRobot />
        {/* corner registration marks (matches the editorial portrait frame) */}
        <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-accent" />
        <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-accent" />
        <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-accent" />
        <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-accent" />
        {/* mono caption strip */}
        <div className="absolute left-3 bottom-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-muted pointer-events-none">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Online
          </span>
          <span>UNIT 01 / MA-AI</span>
        </div>
      </div>

      <div className="rise" style={{ animationDelay: "0.4s" }}>
        <div className="flex items-center justify-center md:justify-start gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-muted mb-3">
          <span className="w-6 h-px bg-muted" />
          The Numbers
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
          {HERO_STATS.map((stat, index) => (
            <div key={stat.label} className="border-t border-ink pt-3">
              <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted">
                Fig. {String(index + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-3xl md:text-4xl text-ink mt-1 leading-none">
                {stat.value}
              </div>
              <div className="text-[11px] text-ink-2 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rise frame-ink p-5" style={{ animationDelay: "0.55s" }}>
        <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted">
          The Editor Notes
        </div>
        <p className="serif-italic text-ink text-base mt-2 leading-snug">
          &ldquo;The best systems aren&rsquo;t loud. They&rsquo;re the ones you forget
          are there.&rdquo;
        </p>
        <div className="mt-3 text-[11px] font-mono text-ink-2">
          — M.A., on shipping
        </div>
      </div>
    </aside>
  );
}
