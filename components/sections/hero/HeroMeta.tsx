import Clock from "@/components/sections/hero/Clock";
import VisitorCounter from "@/components/sections/hero/VisitorCounter";

export default function HeroMeta() {
  return (
    <div className="page-rail relative z-10 grid grid-cols-12 gap-3 pt-28 md:pt-32 text-[11px] font-mono uppercase tracking-[0.14em] text-ink-2">
      <div className="col-span-12 sm:col-span-6 md:col-span-3 flex items-center justify-center sm:justify-start gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        Live · <Clock />
      </div>
      <div className="hidden md:flex col-span-3 items-center gap-2">
        <span>N 60.4518°</span>
        <span>E 22.2666°</span>
      </div>
      <div className="col-span-12 md:col-span-3 text-center">
        <VisitorCounter />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-3 text-center sm:text-right">
        Established <span className="text-accent">2019</span> · Turku, FI
      </div>
    </div>
  );
}
