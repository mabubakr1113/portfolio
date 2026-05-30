"use client";

const COLOPHON = [
  "Set in Fraunces & Geist",
  "Composed in Next.js 14",
  "Rendered with Three.js",
  "Printed on cream pixels",
];

export default function Footer() {
  return (
    <footer
      className="relative invert-block pt-20 pb-8"
      style={{ zIndex: 2 }}
    >
      <div className="page-rail">
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12 md:col-span-8">
          <p
            className="font-display text-paper leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)" }}
          >
            <span className="serif-italic font-light">end of</span>
            <br />
            dispatch.
            <span className="text-accent">●</span>
          </p>
        </div>
        <aside className="col-span-12 md:col-span-4 self-end">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-paper-2/60 mb-3">
            Colophon
          </div>
          <ul className="space-y-2 text-paper-2/80 text-sm">
            {COLOPHON.map((c) => (
              <li key={c} className="flex items-baseline gap-2">
                <span className="text-accent">·</span>
                {c}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* bottom marquee */}
      <div className="border-y border-paper-2/30 overflow-hidden">
        <div className="marquee marquee--reverse py-4 font-display text-2xl md:text-3xl text-paper">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex items-center gap-12 pr-12">
              {[
                "Available for new dispatches",
                "Senior engineering roles",
                "System design consultations",
                "Ambitious product builds",
                "Bring a hard problem",
              ].map((t) => (
                <span key={`${k}-${t}`} className="flex items-center gap-12">
                  <span className="serif-italic">{t}</span>
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-paper-2/60">
        <div className="col-span-6">
          © {new Date().getFullYear()} Mohammad Abubakr · Turku, FI
        </div>
        <div className="col-span-6 text-right">
          <a href="#top" className="ink-link text-paper-2">
            Return to top ↑
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
