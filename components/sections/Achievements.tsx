"use client";

import { useInView } from "react-intersection-observer";
import { ACHIEVEMENTS } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.06, triggerOnce: true });

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-28 md:py-40 invert-block"
      style={{ zIndex: 2 }}
    >
      <div className="page-rail">
        <SectionHeader
        number="05"
        kicker="Honours & footnotes"
        title={
          <span className="text-paper">
            The bits the{" "}
            <span className="serif-italic font-light text-accent">CV</span>{" "}
            won&rsquo;t tell you.
          </span>
        }
        />

      <div className="grid grid-cols-12 gap-x-4 gap-y-12">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = a.icon;
          return (
            <article
              key={a.title}
              className="col-span-12 md:col-span-6 group"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity .8s ease ${i * 130}ms, transform .8s ease ${i * 130}ms`,
              }}
            >
              <div className="border-t border-paper-2/30 pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="section-numeral text-sm">
                      {String(i + 1).padStart(2, "0")} /
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-paper-2/70">
                      {a.year}
                    </span>
                  </div>
                  <Icon size={20} className="text-paper-2/70 group-hover:text-accent transition-colors" />
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-paper leading-[0.95] mb-3">
                  {a.title}
                </h3>
                <p className="serif-italic text-accent text-lg mb-3">
                  {a.org}
                </p>
                <p className="text-paper-2/80 text-base leading-relaxed">
                  {a.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 border border-paper-2/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper">
                  <span className="text-accent">✦</span>
                  {a.highlight}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}
