import { ABOUT_HIGHLIGHTS } from "@/constants";

type Props = {
  inView: boolean;
};

export default function AboutHighlights({ inView }: Props) {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4 mt-8">
      {ABOUT_HIGHLIGHTS.map((item, index) => (
        <article
          key={item.title}
          className="col-span-12 md:col-span-3 group relative"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: `opacity .7s ease ${index * 120}ms, transform .7s ease ${index * 120}ms`,
          }}
        >
          <div className="border-t-2 border-ink pt-4">
            <div className="flex items-baseline justify-between mb-3">
              <span className="section-numeral text-xs">
                {String(index + 1).padStart(2, "0")} —
              </span>
              <item.icon size={18} className="text-ink group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-display text-2xl text-ink leading-tight mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
