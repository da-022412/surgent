import { SectionHeader } from "@/components/surgent/SectionHeader";
import { BookACallButton } from "@/features/marketing/components/BookACallModal";

export function CtaSection() {
  return (
    <section id="cta" className="border-t border-surgent-border py-10 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <SectionHeader
          eyebrow="Get Started"
          headline="Find Out Where Your Team Is Losing Time."
          description="A free 30-minute call with the SurgentAI team. We'll map the work in your business where an AI agent can step in immediately."
          align="center"
        />
        <BookACallButton variant="primary" size="lg">
          Book a Free Call
        </BookACallButton>
      </div>
    </section>
  );
}
