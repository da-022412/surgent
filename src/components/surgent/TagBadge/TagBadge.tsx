import { cn } from "@/lib/utils";

interface TagBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TagBadge({ children, className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-sm border border-surgent-border bg-surgent-surface",
        "px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted",
        "transition-colors hover:border-surgent-primary/40 hover:text-surgent-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
