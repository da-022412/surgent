"use client";

const colorTokens = [
  {
    name: "Primary",
    value: "oklch(82.55% 0.182 145)",
    token: "--surgent-primary",
    role: "CTA, Accent, Active",
  },
  {
    name: "Background",
    value: "oklch(12% 0.01 250)",
    token: "--surgent-background",
    role: "Page Background",
  },
  {
    name: "Surface",
    value: "oklch(16% 0.01 250)",
    token: "--surgent-surface",
    role: "Cards, Panels",
  },
  {
    name: "Border",
    value: "oklch(25% 0.02 145)",
    token: "--surgent-border",
    role: "Outlines, Dividers",
  },
  {
    name: "Foreground",
    value: "oklch(92% 0.01 145)",
    token: "--surgent-foreground",
    role: "Primary Text",
  },
  {
    name: "Muted",
    value: "oklch(60% 0.01 250)",
    token: "--surgent-muted",
    role: "Caption, Secondary",
  },
  { name: "Chart 1", value: "oklch(82.55% 0.182 145)", token: "--chart-1", role: "Data Series 1" },
  { name: "Chart 2", value: "oklch(65% 0.14 145)", token: "--chart-2", role: "Data Series 2" },
  { name: "Chart 3", value: "oklch(48% 0.10 145)", token: "--chart-3", role: "Data Series 3" },
  { name: "Chart 4", value: "oklch(35% 0.06 145)", token: "--chart-4", role: "Data Series 4" },
  { name: "Chart 5", value: "oklch(25% 0.04 145)", token: "--chart-5", role: "Data Series 5" },
  {
    name: "Destructive",
    value: "oklch(0.704 0.191 22.216)",
    token: "--destructive",
    role: "Error, Warning",
  },
];

export function ColorRamp() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
      {colorTokens.map((c) => (
        <div key={c.token} className="overflow-hidden rounded-sm border border-surgent-border">
          <div className="h-14 w-full" style={{ background: c.value }} />
          <div className="bg-surgent-surface p-3 space-y-0.5">
            <p className="text-[0.8rem] font-semibold text-surgent-foreground leading-snug">
              {c.name}
            </p>
            <p className="font-mono text-[0.6rem] text-surgent-primary leading-tight break-all">
              {c.value}
            </p>
            <p className="font-mono text-[0.55rem] text-surgent-muted leading-tight">{c.token}</p>
            <p className="font-mono text-[0.55rem] text-surgent-muted/60 leading-tight">{c.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
