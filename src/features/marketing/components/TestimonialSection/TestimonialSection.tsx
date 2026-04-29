export function TestimonialSection() {
  return (
    <section id="case-studies" className="border-t border-surgent-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <blockquote className="font-sans text-2xl font-semibold leading-snug tracking-[-0.02em] text-surgent-foreground md:text-3xl">
            &ldquo;Before Surgent, our team spent 30 hours a week on manual data entry and lead
            routing. Now it&rsquo;s zero — and the accuracy is better than anything a human could do
            at that speed.&rdquo;
          </blockquote>
          <div className="flex flex-col items-center gap-0.5">
            <p className="font-sans text-sm font-medium text-surgent-foreground">Sarah Chen</p>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
              Head of Operations · Meridian
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
