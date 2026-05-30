const NOTE_CARDS = [
  {
    label: "Currently",
    body: (
      <>
        Senior FS Engineer, <span className="serif-italic">Emma Systems</span>, Espoo.
      </>
    ),
    className: "font-display text-xl text-ink leading-tight",
  },
  {
    label: "Studying",
    body: (
      <>
        MSc Software Engineering — security &amp; AI-assisted development.
        <span className="block mt-1 text-muted">GPA 4.4 / 5.0</span>
      </>
    ),
    className: "text-sm text-ink-2 leading-snug",
  },
  {
    label: "Offering",
    body: (
      <>
        Full-stack delivery · system design ·{" "}
        <span className="serif-italic">staff-level code review</span> · hiring &amp; mentoring.
      </>
    ),
    className: "text-sm text-ink-2 leading-snug",
  },
];

export default function AboutCopy() {
  return (
    <div className="col-span-12 md:col-span-9">
      <p className="text-xl md:text-2xl leading-snug text-ink-2 text-pretty">
        <span className="font-display text-7xl md:text-8xl float-left leading-[0.8] mr-3 mt-2 text-ink">
          F
        </span>
        ive years deep, I&rsquo;ve been the engineer in the room who asks the{" "}
        <span className="serif-italic text-ink">awkward questions</span> — the
        one about the database&rsquo;s recovery plan, the unowned cron, the silent
        retry loop. The reward for asking is a system that doesn&rsquo;t page anyone
        at three in the morning.
      </p>

      <p className="mt-8 text-lg leading-relaxed text-ink-2 max-w-prose">
        Today I write React, TypeScript and Node by day, study software security
        and AI-assisted development by night at the{" "}
        <span className="ink-link">University of Turku</span>, and split the
        in-between mentoring the next batch of engineers. I&rsquo;ve scaled things to{" "}
        <span className="font-semibold text-ink">100K daily users</span>, shipped
        product worth <span className="font-semibold text-ink">$500K+</span>,
        and somehow still find time to win{" "}
        <a href="#achievements" className="ink-link text-accent">
          the occasional hackathon
        </a>
        .
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {NOTE_CARDS.map((card) => (
          <div key={card.label} className="border-t border-ink pt-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted mb-2">
              {card.label}
            </div>
            <p className={card.className}>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
