"use client";

import { StatusBadge } from "@/components/surgent/StatusBadge";
import { ThemeToggle } from "@/components/surgent/ThemeToggle";

export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(var(--surgent-grid-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--surgent-grid-line) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export function PageHeader() {
  return (
    <header className="border-b border-surgent-border pb-10">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <StatusBadge status="live" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
            v1.0.0 · Alpha · OKLCH
          </span>
        </div>
        <ThemeToggle />
      </div>
      <h1 className="font-sans text-[3.5rem] font-extrabold leading-none tracking-[-0.04em] text-surgent-foreground">
        Surgent
        <span className="text-surgent-primary"> Design System</span>
      </h1>
      <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-surgent-muted">
        Component atoms and molecules for SurgentAI. Built on OKLCH color science, Geist typography,
        and an industrial sharp-edge aesthetic inspired by Profound and Claro.
      </p>
    </header>
  );
}

export function PageSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-6 flex items-baseline gap-4">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-primary">
          {index}
        </span>
        <h2 className="text-lg font-semibold tracking-tight text-surgent-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function PageFooter() {
  return (
    <footer className="border-t border-surgent-border pt-6 flex items-center justify-between">
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
        SurgentAI Design System · v1.0.0
      </span>
      <StatusBadge status="live" />
    </footer>
  );
}
