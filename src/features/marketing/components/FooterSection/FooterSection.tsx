export function FooterSection() {
  return (
    <footer className="border-t border-surgent-border">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-none bg-surgent-primary" aria-hidden />
            <span className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-surgent-foreground">
              SurgentAI
            </span>
          </div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.06em] text-surgent-muted">
            © 2026 SurgentAI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
