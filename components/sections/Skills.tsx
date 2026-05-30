"use client";

import { useInView } from "react-intersection-observer";
import { SKILL_MASTERY } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

const ALL_SKILLS = Array.from(
  new Set(SKILL_MASTERY.flatMap((g) => g.skills))
);

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative isolate overflow-hidden py-28 md:py-40"
      style={{ zIndex: 2 }}
    >
      <div className="page-rail">
        <SectionHeader
        number="03"
        kicker="The toolkit"
        title={
          <>
            What I reach for —{" "}
            <span className="serif-italic font-light">by instinct</span>.
          </>
        }
        lede="A working set of languages, runtimes, infra and tools that have earned a place in production."
        />

        <div className="grid grid-cols-12 gap-x-6 gap-y-8 md:gap-x-8 items-start">
        <div className="col-span-12 md:col-span-3">
          <div className="border-t-2 border-ink pt-4">
            <div className="flex items-baseline justify-between mb-2">
              <span className="section-numeral text-xs">03 /</span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
                {ALL_SKILLS.length} items
              </span>
            </div>
            <h3 className="font-display text-4xl text-ink leading-none">
              Tech Stack
            </h3>
            <p className="serif-italic text-ink-2 mt-2 text-base">
              Languages, runtimes, infra, tools.
            </p>
          </div>
        </div>

        <ul className="col-span-12 md:col-span-9 flex flex-wrap gap-x-4 gap-y-3 pt-1 md:pt-4 xl:pr-56 2xl:pr-72">
          {ALL_SKILLS.map((s, i) => {
            const rot = ((i * 17) % 5) - 2;
            return (
              <li
                key={s}
                className="font-display text-2xl md:text-3xl text-ink leading-[1.12] transition-colors duration-200 hover:text-accent cursor-default"
                style={{
                  transform: `rotate(${rot}deg)`,
                  opacity: inView ? 1 : 0,
                  transitionProperty: "opacity, color",
                  transitionDelay: `${i * 20}ms`,
                  transitionDuration: "500ms",
                }}
              >
                {s}
                <span className="text-accent text-base align-super ml-0.5">
                  ·
                </span>
              </li>
            );
          })}
        </ul>
      </div>

        <div className="mt-20 grid grid-cols-12 gap-4 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="font-display text-3xl md:text-4xl text-ink leading-tight">
            <span className="serif-italic">Tools are tools.</span> The job is
            picking the right one — then proving it was right.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right text-[11px] font-mono uppercase tracking-[0.2em] text-muted">
          — Editor&rsquo;s note, §03
        </div>
        </div>
      </div>
    </section>
  );
}
