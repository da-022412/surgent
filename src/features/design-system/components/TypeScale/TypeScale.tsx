"use client";

const typeScale = [
  {
    label: "Display",
    size: "3.5rem",
    weight: 800,
    tracking: "-0.04em",
    mono: false,
    sample: "Automated at Scale",
  },
  {
    label: "H1",
    size: "2.25rem",
    weight: 700,
    tracking: "-0.03em",
    mono: false,
    sample: "Agent Intelligence",
  },
  {
    label: "H2",
    size: "1.5rem",
    weight: 600,
    tracking: "-0.02em",
    mono: false,
    sample: "Workflow Execution",
  },
  {
    label: "H3",
    size: "1.125rem",
    weight: 600,
    tracking: "-0.01em",
    mono: false,
    sample: "Task Orchestration",
  },
  {
    label: "Body MD",
    size: "1rem",
    weight: 400,
    tracking: "0em",
    mono: false,
    sample: "Surgent accelerates business automation through precision-engineered AI agents.",
  },
  {
    label: "Body SM",
    size: "0.875rem",
    weight: 400,
    tracking: "0em",
    mono: false,
    sample: "Each agent is built to handle complex workflows with deterministic output.",
  },
  {
    label: "Label Mono",
    size: "0.85rem",
    weight: 500,
    tracking: "0.05em",
    mono: true,
    sample: "AGENT_ACTIVE // SYSTEM_LIVE",
  },
  {
    label: "Caption Mono",
    size: "0.7rem",
    weight: 400,
    tracking: "0.08em",
    mono: true,
    sample: "0xA4F2 // TASK_ID:8821 // STATUS:OK",
  },
];

export function TypeScale() {
  return (
    <div className="divide-y divide-surgent-border/40">
      {typeScale.map((t) => (
        <div
          key={t.label}
          className="group flex items-baseline gap-6 py-4 hover:bg-surgent-surface/30 transition-colors px-2 -mx-2 rounded-sm"
        >
          <div className="w-24 shrink-0">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
              {t.label}
            </span>
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            <span
              className="block truncate text-surgent-foreground leading-tight"
              style={{
                fontSize: t.size,
                fontWeight: t.weight,
                letterSpacing: t.tracking,
                fontFamily: t.mono ? "var(--font-mono)" : "var(--font-sans)",
              }}
            >
              {t.sample}
            </span>
          </div>
          <div className="hidden lg:block shrink-0 text-right space-y-0.5">
            <p className="font-mono text-[0.55rem] text-surgent-muted/60">
              {t.size} / {t.weight}w
            </p>
            <p className="font-mono text-[0.55rem] text-surgent-muted/40">
              {t.mono ? "Geist Mono" : "Geist Sans"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
