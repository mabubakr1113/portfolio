import type { MouseEventHandler } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export default function GlowCard({ children, className = "", style, onMouseEnter, onMouseLeave }: GlowCardProps) {
  return (
    <div
      className={`glass rounded-2xl border border-[#1e2a3a] glow-card ${className}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
