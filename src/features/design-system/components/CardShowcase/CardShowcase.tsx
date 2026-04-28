"use client";

import { DataCard } from "@/components/surgent/DataCard";
import { StatusBadge } from "@/components/surgent/StatusBadge";

function LatencyTable() {
  const rows = [
    { label: "Ingestion", ms: "12ms" },
    { label: "Routing", ms: "4ms" },
    { label: "Execution", ms: "340ms" },
    { label: "Delivery", ms: "18ms" },
  ];

  return (
    <div className="space-y-1.5">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between">
          <span className="font-mono text-[0.65rem] text-surgent-muted uppercase tracking-widest">
            {row.label}
          </span>
          <span className="font-mono text-[0.65rem] text-surgent-primary">{row.ms}</span>
        </div>
      ))}
    </div>
  );
}

export function CardShowcase() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <DataCard title="Active Agents" meta="Live">
        <p className="font-sans text-3xl font-extrabold tracking-tight text-surgent-primary">24</p>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          +3 since last hour
        </p>
      </DataCard>

      <DataCard title="Tasks Completed" meta="24h">
        <p className="font-sans text-3xl font-extrabold tracking-tight text-surgent-foreground">
          1,842
        </p>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          99.7% success rate
        </p>
      </DataCard>

      <DataCard title="System Status" meta="Ops">
        <div className="flex flex-col gap-2">
          <StatusBadge status="active" />
          <StatusBadge status="live" />
          <StatusBadge status="idle" />
        </div>
      </DataCard>

      <DataCard title="No Power Rail" meta="Variant" accent={false}>
        <p className="font-sans text-sm text-surgent-muted leading-relaxed">
          Cards without <code className="text-surgent-primary">accent</code> omit the top power
          rail. Use for informational content that is not actively running.
        </p>
      </DataCard>

      <DataCard title="Pipeline Latency" meta="P95">
        <LatencyTable />
      </DataCard>

      <DataCard title="Error Rate" meta="Alert">
        <p className="font-sans text-3xl font-extrabold tracking-tight text-surgent-foreground">
          0.3%
        </p>
        <StatusBadge status="error" />
      </DataCard>
    </div>
  );
}
