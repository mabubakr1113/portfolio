interface TechTagProps {
  label: string;
  variant?: "default" | "pill";
}

export default function TechTag({ label, variant = "default" }: TechTagProps) {
  if (variant === "pill") {
    return (
      <span className="px-3 py-1.5 rounded-lg bg-[#0d1424] border border-[#1e2a3a] text-[#9ca3af] text-xs font-mono hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200 cursor-default">
        {label}
      </span>
    );
  }

  return (
    <span className="px-2.5 py-1 rounded-md bg-[#0d1424] border border-[#1e2a3a] text-[#9ca3af] text-xs font-mono">
      {label}
    </span>
  );
}
