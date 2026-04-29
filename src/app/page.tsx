import { NavBar } from "@/components/surgent/NavBar";
import { GridBackground } from "@/features/design-system/components/PageLayout";
import { HeroSection } from "@/features/marketing/components/HeroSection";
import { LogoBarSection } from "@/features/marketing/components/LogoBarSection";
import { ManifestoSection } from "@/features/marketing/components/ManifestoSection";
import { HowItWorksSection } from "@/features/marketing/components/HowItWorksSection";
import { FeaturesSection } from "@/features/marketing/components/FeaturesSection";
import { AgentTypesSection } from "@/features/marketing/components/AgentTypesSection";
import { IntegrationsSection } from "@/features/marketing/components/IntegrationsSection";
import { TestimonialSection } from "@/features/marketing/components/TestimonialSection";
import { FaqSection } from "@/features/marketing/components/FaqSection";
import { CtaSection } from "@/features/marketing/components/CtaSection";
import { FooterSection } from "@/features/marketing/components/FooterSection";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-surgent-background">
      <GridBackground />
      <NavBar />
      <main id="main-content" className="relative">
        <HeroSection />
        <LogoBarSection />
        <ManifestoSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AgentTypesSection />
        <IntegrationsSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
