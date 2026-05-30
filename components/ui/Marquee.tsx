"use client";

interface MarqueeProps {
  items: readonly string[];
  speed?: number; // seconds for one full loop
}

export default function Marquee({ items, speed = 35 }: MarqueeProps) {
  // Duplicate so the seam is invisible
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3" aria-hidden>
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#080c14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#080c14] to-transparent" />

      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-xs font-mono text-[#4b5563]">
            {item}
            <span className="text-emerald-700">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
