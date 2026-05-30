interface BadgeProps {
  label: string;
  className?: string;
}

export default function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${className}`}
    >
      {label}
    </span>
  );
}
