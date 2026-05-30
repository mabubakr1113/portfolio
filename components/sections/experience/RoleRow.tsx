import type { ExperienceRole } from "@/types";

type Props = {
  role: ExperienceRole;
  index: number;
  inView: boolean;
};

export default function RoleRow({ role, index, inView }: Props) {
  return (
    <article
      className="group grid grid-cols-12 gap-4 py-10 border-t border-ink"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity .8s ease ${index * 120}ms, transform .8s ease ${index * 120}ms`,
      }}
    >
      <div className="col-span-12 md:col-span-2">
        <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted">
          {role.period}
        </div>
        {role.current && (
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Now
          </div>
        )}
      </div>

      <div className="col-span-12 md:col-span-7">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted mb-2">
          Chapter {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="font-display text-3xl md:text-4xl text-ink leading-[0.95]">
          {role.title}<span className="text-accent">,</span>{" "}
          <span className="serif-italic font-light">{role.company}</span>
        </h3>

        <ul className="mt-6 space-y-3 max-w-2xl">
          {role.highlights.map((highlight, itemIndex) => (
            <li key={highlight} className="flex gap-3 text-[15px] text-ink-2 leading-relaxed">
              <span className="font-mono text-muted text-xs mt-1.5 shrink-0">
                {String(itemIndex + 1).padStart(2, "0")}
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {role.tech.map((tech) => (
            <span key={tech} className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-2 px-2 py-1 border border-ink-2/40 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="col-span-12 md:col-span-3 md:text-right">
        <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted">
          Filed from
        </div>
        <p className="serif-italic text-ink mt-1">{role.location}</p>
      </div>
    </article>
  );
}
