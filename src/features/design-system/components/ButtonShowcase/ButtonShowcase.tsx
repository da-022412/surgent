"use client";

import { SurgentButton } from "@/components/surgent/SurgentButton";

function CodeSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-surgent-border bg-surgent-surface p-3 space-y-1">
      <p className="font-mono text-[0.55rem] uppercase tracking-[0.1em] text-surgent-muted">
        {label}
      </p>
      <p className="font-mono text-[0.65rem] text-surgent-primary">{value}</p>
    </div>
  );
}

function SectionDivider() {
  return <div className="border-t border-surgent-border" />;
}

export function ButtonShowcase() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          Primary — glow on hover
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <SurgentButton variant="primary" size="sm">
            Deploy Agent
          </SurgentButton>
          <SurgentButton variant="primary" size="md">
            Initialize System
          </SurgentButton>
          <SurgentButton variant="primary" size="lg">
            Launch Workflow
          </SurgentButton>
          <SurgentButton variant="primary" size="md" disabled>
            Disabled
          </SurgentButton>
        </div>
      </div>

      <SectionDivider />

      <div className="space-y-2">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          Ghost — blueprint border
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <SurgentButton variant="ghost" size="sm">
            View Logs
          </SurgentButton>
          <SurgentButton variant="ghost" size="md">
            Configure
          </SurgentButton>
          <SurgentButton variant="ghost" size="lg">
            Documentation
          </SurgentButton>
          <SurgentButton variant="ghost" size="md" disabled>
            Disabled
          </SurgentButton>
        </div>
      </div>

      <SectionDivider />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <CodeSpec label="Border Radius" value="2px" />
        <CodeSpec label="Font" value="Geist Mono" />
        <CodeSpec label="Case" value="Uppercase" />
        <CodeSpec label="Glow" value="0 0 20px primary/20" />
      </div>
    </div>
  );
}
