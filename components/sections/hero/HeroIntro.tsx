import { PERSONAL } from "@/constants";
import RotatingRole from "@/components/sections/hero/RotatingRole";

export default function HeroIntro() {
  return (
    <div className="col-span-12 md:col-span-7 text-center md:text-left">
      <div className="rise flex flex-wrap items-center justify-center md:justify-start gap-3 mb-8">
        <span className="tape font-mono text-[11px] uppercase tracking-[0.16em]">
          Now Reading
        </span>
        <span className="text-[12px] font-mono text-ink-2">
          A senior engineer, presently <RotatingRole />
        </span>
      </div>

      <h1
        className="font-display font-black text-ink leading-[0.86] rise max-w-full"
        style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
      >
        <span className="block">{PERSONAL.name.first}</span>
        <span className="block">
          <span className="serif-italic font-light">{PERSONAL.name.last}</span>
          <span className="text-accent">.</span>
        </span>
      </h1>

      <div className="mt-6 h-px bg-ink draw-line w-3/4 mx-auto md:mx-0" />

      <p className="rise text-pretty mt-8 max-w-xl mx-auto md:mx-0 text-lg md:text-xl leading-snug text-ink-2">
        Builds the unglamorous middle —{" "}
        <span className="serif-italic">the schemas, the SLAs, the systems</span>{" "}
        that quietly carry <span className="text-accent font-medium">100K+ daily users</span>{" "}
        and <span className="text-accent font-medium">$500K+ in revenue</span>{" "}
        without breaking a sweat. React to Postgres to AWS, the whole stack —
        shipped, measured, mentored.
      </p>

      <div className="rise mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6">
        <a href="#contact" className="group inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-300">
          Commission a Build
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a href="#projects" className="ink-link font-mono text-xs uppercase tracking-[0.2em]">
          Read the Work
        </a>
        <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" className="ink-link font-mono text-xs uppercase tracking-[0.2em]">
          GitHub ↗
        </a>
        <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="ink-link font-mono text-xs uppercase tracking-[0.2em]">
          LinkedIn ↗
        </a>
      </div>
    </div>
  );
}
