"use client";

import { useInView } from "react-intersection-observer";
import { CONTACT_LINKS, SOCIAL_LINKS, PERSONAL } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-40"
      style={{ zIndex: 2 }}
    >
      <div className="page-rail">
        <SectionHeader
        number="06"
        kicker="The closing letter"
        title={
          <>
            Write to me — I{" "}
            <span className="serif-italic font-light">read everything</span>.
          </>
        }
        />

      <div className="grid grid-cols-12 gap-x-4 gap-y-16">
        <div className="col-span-12 md:col-span-8">
          <p
            className="font-display text-ink leading-[1.05] break-words"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)" }}
          >
            <a
              href={`mailto:${PERSONAL.email}`}
              className="inline relative group break-all"
            >
              {PERSONAL.email}
              <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
            <span className="text-accent">.</span>
          </p>

          <p className="mt-10 max-w-xl text-lg text-ink-2 leading-snug">
            Open to senior engineering roles, system-design consultations and
            unreasonably ambitious product builds.{" "}
            <span className="serif-italic">
              Bring a hard problem; I&rsquo;ll bring the questions.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] hover:bg-accent transition-colors duration-300"
            >
              Compose a Message
              <span>→</span>
            </a>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ink-link font-mono text-xs uppercase tracking-[0.2em] inline-flex items-center gap-2"
              >
                {s.label}
                <span className="text-muted normal-case">/{s.user}</span>
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        <aside className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-6">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted">
            Direct lines
          </div>
          {CONTACT_LINKS.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "Location" ? "_blank" : undefined}
              rel={c.label === "Location" ? "noopener noreferrer" : undefined}
              className="group border-t border-ink pt-3 flex items-baseline justify-between gap-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: `opacity .7s ease ${i * 100}ms, transform .7s ease ${i * 100}ms`,
              }}
            >
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
                  {c.label}
                </div>
                <div className="font-display text-xl text-ink mt-1 group-hover:text-accent transition-colors">
                  {c.value}
                </div>
              </div>
              <span className="text-ink-2 group-hover:text-accent group-hover:translate-x-1 transition-all">
                →
              </span>
            </a>
          ))}
          <div className="mt-2 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-accent">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {PERSONAL.availability}
          </div>
        </aside>
      </div>
      </div>
    </section>
  );
}
