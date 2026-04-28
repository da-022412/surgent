"use client";

import { Input } from "@/components/ui/Input";

export function InputShowcase() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="space-y-1.5">
        <label className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          Agent Name
        </label>
        <Input
          placeholder="e.g. outbound-qualifier-v2"
          className="rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground placeholder:text-surgent-muted/40 focus-visible:border-surgent-primary focus-visible:ring-surgent-primary/20"
        />
      </div>
      <div className="space-y-1.5">
        <label className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          API Endpoint
        </label>
        <Input
          placeholder="https://api.surgent.ai/v1/run"
          className="rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground placeholder:text-surgent-muted/40 focus-visible:border-surgent-primary focus-visible:ring-surgent-primary/20"
        />
      </div>
      <div className="space-y-1.5">
        <label className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          Disabled State
        </label>
        <Input
          placeholder="Read-only field"
          disabled
          className="rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground placeholder:text-surgent-muted/40"
        />
      </div>
    </div>
  );
}
