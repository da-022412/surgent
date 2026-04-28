import { cn } from "@/lib/utils";
import type { BadgeStatus } from "./types";

interface StatusBadgeProps {
  status: BadgeStatus;
  className?: string;
}

const config: Record<BadgeStatus, { label: string; color: string }> = {
  active: { label: "Agent Active", color: "oklch(82.55% 0.182 145)" },
  live: { label: "System Live", color: "oklch(82.55% 0.182 145)" },
  idle: { label: "Idle", color: "oklch(60% 0.01 250)" },
  error: { label: "Error", color: "oklch(0.704 0.191 22.216)" },
};

const pulsing: BadgeStatus[] = ["active", "live"];

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { label, color } = config[status];
  const isPulsing = pulsing.includes(status);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border border-surgent-border bg-surgent-surface",
        "px-2 py-[3px] font-mono text-[0.6rem] uppercase tracking-[0.1em]",
        className
      )}
      style={{ color }}
    >
      <span className="relative flex size-[6px] shrink-0">
        {isPulsing && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full opacity-70"
            style={{ backgroundColor: color }}
          />
        )}
        <span
          className="relative inline-flex size-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </span>
      {label}
    </span>
  );
}
