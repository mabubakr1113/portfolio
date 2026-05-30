import type { Project } from "@/types";

type Props = {
  project: Project;
  index: number;
  inView: boolean;
  featured?: boolean;
};

const splitTitle = (title: string) => {
  const [name, detail] = title.split("–");
  return { name: name.trim(), detail: detail?.trim() };
};

export default function ProjectArticle({ project, index, inView, featured }: Props) {
  const { name, detail } = splitTitle(project.title);

  return (
    <article
      className="group grid grid-cols-12 gap-4 py-12 border-t border-ink"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity .8s ease ${index * 90}ms, transform .8s ease ${index * 90}ms`,
      }}
    >
      <div className="col-span-12 md:col-span-2 flex md:flex-col items-start gap-3 justify-between md:justify-start">
        <span className="section-numeral text-base">
          P.{String(index + 1).padStart(2, "0")}
        </span>
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
          {project.period}
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
          {project.badge}
        </div>
      </div>

      <div className="col-span-12 md:col-span-10">
        <h3
          className="font-display text-ink leading-[0.95]"
          style={{ fontSize: featured ? "clamp(2.25rem, 5vw, 4rem)" : "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          {name}
          {detail && (
            <span className="serif-italic font-light text-ink-2"> — {detail}</span>
          )}
        </h3>

        <p className={`mt-6 text-pretty text-ink-2 leading-snug ${featured ? "text-xl max-w-3xl" : "text-base max-w-2xl"}`}>
          {project.description}
        </p>

        <ul className="mt-6 space-y-2 max-w-2xl">
          {project.highlights.map((highlight, itemIndex) => (
            <li key={highlight} className="flex gap-3 text-[15px] text-ink-2 leading-relaxed">
              <span className="font-mono text-xs text-accent mt-1.5 shrink-0">
                §{itemIndex + 1}
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 px-2 py-1 border border-ink-2/40 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
