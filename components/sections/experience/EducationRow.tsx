import type { Education } from "@/types";

type Props = {
  edu: Education;
  index: number;
  inView: boolean;
};

export default function EducationRow({ edu, index, inView }: Props) {
  return (
    <div
      className="grid grid-cols-12 gap-4 py-8 border-t border-ink"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity .7s ease ${index * 120}ms, transform .7s ease ${index * 120}ms`,
      }}
    >
      <div className="col-span-6 md:col-span-2 text-xs font-mono uppercase tracking-[0.18em] text-muted">
        {edu.period}
      </div>
      <div className="col-span-6 md:col-span-7">
        <h4 className="font-display text-2xl text-ink leading-tight">{edu.degree}</h4>
        <p className="serif-italic text-ink-2 mt-1">{edu.institution}</p>
        <p className="text-sm text-muted mt-1">{edu.specialisation}</p>
      </div>
      <div className="col-span-12 md:col-span-3 md:text-right">
        <div className="font-display text-3xl text-accent leading-none">{edu.gpa}</div>
        <div className="text-xs font-mono uppercase tracking-[0.18em] text-muted mt-1">
          {edu.location}
        </div>
      </div>
    </div>
  );
}
