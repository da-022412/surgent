const logos = ["Acme Corp", "Meridian", "Volta Labs", "Nexus", "Orbital", "Stratum AI"];

export function LogoBarSection() {
  return (
    <section className="border-y border-surgent-border py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-7 text-center font-mono text-[0.6rem] uppercase tracking-[0.2em] text-surgent-muted">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-mono text-sm font-medium tracking-tight text-surgent-muted/50 transition-colors hover:text-surgent-muted"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
