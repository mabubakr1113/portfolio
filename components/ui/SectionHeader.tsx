"use client";

import { useInView } from "react-intersection-observer";

type Props = {
  number: string;
  kicker: string;
  title: React.ReactNode;
  lede?: string;
};

export default function SectionHeader({ number, kicker, title, lede }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <header ref={ref} className="grid grid-cols-12 gap-4 mb-12 md:mb-20 text-center md:text-left">
      <div className="col-span-12 md:col-span-3 flex md:flex-col items-center md:items-start justify-center md:justify-start gap-3">
        <span className="section-numeral text-base">{number} /</span>
        <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted">
          {kicker}
        </span>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2
          className={`font-display font-light text-ink leading-[0.9] transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
        >
          {title}
        </h2>
        {lede && (
          <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg text-ink-2 leading-snug">{lede}</p>
        )}
        <div
          className={`mt-8 h-px bg-ink origin-left transition-transform duration-1000 mx-auto md:mx-0 ${
            inView ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </div>
    </header>
  );
}
