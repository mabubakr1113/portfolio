"use client";

import { useInView } from "react-intersection-observer";
import { PERSONAL, PROJECTS } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectArticle from "@/components/sections/projects/ProjectArticle";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.03, triggerOnce: true });
  const [featured, ...rest] = PROJECTS;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-28 md:py-40"
      style={{ zIndex: 2 }}
    >
      <div className="page-rail">
        <SectionHeader
          number="04"
          kicker="Selected works"
          title={
            <>
              Six builds. <span className="serif-italic font-light">Six receipts</span>.
            </>
          }
          lede="A short anthology — the platforms, prototypes and one award winner that earned their keep."
        />

        <ProjectArticle project={featured} index={0} inView={inView} featured />
        {rest.map((project, index) => (
          <ProjectArticle
            key={project.title}
            project={project}
            index={index + 1}
            inView={inView}
          />
        ))}
        <div className="border-t border-ink" />

        <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <p className="font-display text-3xl md:text-4xl text-ink max-w-xl">
            More in the <span className="serif-italic">archive</span> —
          </p>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-link font-mono text-xs uppercase tracking-[0.2em]"
          >
            github / {PERSONAL.githubUser} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
