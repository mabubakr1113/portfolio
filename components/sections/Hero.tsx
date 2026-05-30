"use client";

import HeroFooter from "@/components/sections/hero/HeroFooter";
import HeroIntro from "@/components/sections/hero/HeroIntro";
import HeroMeta from "@/components/sections/hero/HeroMeta";
import HeroSidebar from "@/components/sections/hero/HeroSidebar";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col"
      style={{ zIndex: 2 }}
    >
      <HeroMeta />
      <div className="page-rail relative z-10 mt-6 hairline opacity-70" />

      <div className="page-rail relative z-10 flex-1 grid grid-cols-12 gap-4 pt-10 md:pt-14">
        <aside className="hidden md:flex col-span-1 flex-col items-start gap-6 pt-2">
          <span className="section-numeral text-sm">00 /</span>
          <span
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            The Engineer&apos;s Journal
          </span>
        </aside>
        <HeroIntro />
        <HeroSidebar />
      </div>

      <HeroFooter />
    </section>
  );
}
