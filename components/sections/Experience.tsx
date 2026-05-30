"use client";

import { useInView } from "react-intersection-observer";
import { EDUCATION, EXPERIENCE } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import EducationRow from "@/components/sections/experience/EducationRow";
import RoleRow from "@/components/sections/experience/RoleRow";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.04, triggerOnce: true });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-28 md:py-40"
      style={{ zIndex: 2 }}
    >
      <div className="page-rail">
        <SectionHeader
          number="02"
          kicker="Service record"
          title={
            <>
              Five years of{" "}
              <span className="serif-italic font-light">shipping</span>, in five
              acts.
            </>
          }
          lede="Each role left a number, a metric, or a team behind. The receipts are below."
        />

        {EXPERIENCE.map((role, index) => (
          <RoleRow key={role.period} role={role} index={index} inView={inView} />
        ))}
        <div className="border-t border-ink" />

        <div className="mt-24">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="section-numeral text-base">02b /</span>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted">
              Schooling
            </span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-ink mb-6 max-w-2xl">
            And, in parallel, <span className="serif-italic">a slow education</span>.
          </h3>
          {EDUCATION.map((edu, index) => (
            <EducationRow key={edu.institution} edu={edu} index={index} inView={inView} />
          ))}
          <div className="border-t border-ink" />
        </div>
      </div>
    </section>
  );
}
