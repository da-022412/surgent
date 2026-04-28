"use client";

import { BadgeShowcase } from "@/features/design-system/components/BadgeShowcase";
import { BlogShowcase } from "@/features/design-system/components/BlogShowcase";
import { ButtonShowcase } from "@/features/design-system/components/ButtonShowcase";
import { CardShowcase } from "@/features/design-system/components/CardShowcase";
import { ColorRamp } from "@/features/design-system/components/ColorRamp";
import { FormShowcase } from "@/features/design-system/components/FormShowcase";
import { FoundationShowcase } from "@/features/design-system/components/FoundationShowcase";
import { NavShowcase } from "@/features/design-system/components/NavShowcase";
import { OverlayFeedbackShowcase } from "@/features/design-system/components/OverlayFeedbackShowcase";
import {
  GridBackground,
  PageFooter,
  PageHeader,
  PageSection,
} from "@/features/design-system/components/PageLayout";
import { TypeScale } from "@/features/design-system/components/TypeScale";

export default function DesignSystemPage() {
  return (
    <div className="relative min-h-screen bg-surgent-background">
      <GridBackground />

      <main id="main-content" className="relative mx-auto max-w-6xl px-6 py-16 space-y-20">
        <PageHeader />

        <PageSection index="01" title="OKLCH Color Tokens">
          <ColorRamp />
        </PageSection>

        <PageSection index="02" title="Typography Scale">
          <TypeScale />
        </PageSection>

        <PageSection index="03" title="Buttons">
          <ButtonShowcase />
        </PageSection>

        <PageSection index="04" title="Data Cards">
          <CardShowcase />
        </PageSection>

        <PageSection index="05" title="Status Badges">
          <BadgeShowcase />
        </PageSection>

        <PageSection index="06" title="Spacing & Radius">
          <FoundationShowcase />
        </PageSection>

        <PageSection index="08" title="Forms">
          <FormShowcase />
        </PageSection>

        <PageSection index="09" title="Overlays, Feedback & Accordion">
          <OverlayFeedbackShowcase />
        </PageSection>

        <PageSection index="10" title="Navigation & Section Headers">
          <NavShowcase />
        </PageSection>

        <PageSection index="11" title="Blog Components">
          <BlogShowcase />
        </PageSection>

        <PageFooter />
      </main>
    </div>
  );
}
