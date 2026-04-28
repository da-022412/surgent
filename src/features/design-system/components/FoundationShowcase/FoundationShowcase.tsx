"use client";

const spacing = [
  { label: "xs", px: 4 },
  { label: "sm", px: 8 },
  { label: "md", px: 16 },
  { label: "lg", px: 32 },
];

const radii = [
  { label: "sm", px: "2px", cls: "rounded-sm" },
  { label: "md", px: "4px", cls: "rounded-md" },
  { label: "lg", px: "4px", cls: "rounded-lg" },
];

function SectionDivider() {
  return <div className="border-t border-surgent-border" />;
}

export function FoundationShowcase() {
  return (
    <div className="space-y-10">
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted mb-4">
          Spacing Scale
        </p>
        <div className="flex items-end gap-6">
          {spacing.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div
                className="bg-surgent-primary/20 border border-surgent-primary/40"
                style={{ width: s.px, height: s.px }}
              />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.1em] text-surgent-muted">
                {s.label}
              </span>
              <span className="font-mono text-[0.55rem] text-surgent-muted/50">{s.px}px</span>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted mb-4">
          Border Radius Scale
        </p>
        <div className="flex flex-wrap items-center gap-6">
          {radii.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-2">
              <div
                className={`size-12 bg-surgent-primary/20 border border-surgent-primary/40 ${r.cls}`}
              />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.1em] text-surgent-muted">
                {r.label}
              </span>
              <span className="font-mono text-[0.55rem] text-surgent-muted/50">{r.px}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
