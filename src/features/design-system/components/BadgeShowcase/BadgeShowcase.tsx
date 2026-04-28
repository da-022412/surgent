"use client";

import { StatusBadge } from "@/components/surgent/StatusBadge";

export function BadgeShowcase() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status="active" />
        <StatusBadge status="live" />
        <StatusBadge status="idle" />
        <StatusBadge status="error" />
      </div>
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
        Active and Live variants include a pulsing animation via framer-motion. Idle and Error are
        static.
      </p>
    </div>
  );
}
