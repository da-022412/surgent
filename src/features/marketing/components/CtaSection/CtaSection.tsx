import { SectionHeader } from "@/components/surgent/SectionHeader";
import { BookACallButton } from "@/features/marketing/components/BookACallModal";

export function CtaSection() {
  return (
    <section id="cta" className="border-t border-surgent-border py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <SectionHeader
          eyebrow="Schedule Discovery"
          headline="Deploy Your First AI Agent."
          description="A short conversation with the SurgentAI team to identify operational workflows where our agents could deliver immediate impact."
          align="center"
        />
        <BookACallButton variant="primary" size="lg">
          Book a Discovery Call
        </BookACallButton>
      </div>
    </section>
  );
}
