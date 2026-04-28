"use client";

import { NavBar } from "@/components/surgent/NavBar";
import { EyebrowLabel } from "@/components/surgent/EyebrowLabel";
import { SectionHeader } from "@/components/surgent/SectionHeader";
import { Separator } from "@/components/ui/Separator";

export function NavShowcase() {
  return (
    <div className="space-y-10">
      {/* NavBar preview */}
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted mb-4">
          NavBar — sticky, mobile-responsive
        </p>
        <div className="rounded-sm border border-surgent-border overflow-hidden">
          <NavBar />
        </div>
      </div>

      <div className="border-t border-surgent-border" />

      {/* EyebrowLabel */}
      <div className="space-y-4">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          EyebrowLabel
        </p>
        <div className="flex flex-wrap gap-4">
          <EyebrowLabel>Used by 500+ teams</EyebrowLabel>
          <EyebrowLabel>New in v2.4</EyebrowLabel>
          <EyebrowLabel>Enterprise-grade</EyebrowLabel>
        </div>
      </div>

      <div className="border-t border-surgent-border" />

      {/* SectionHeader */}
      <div className="space-y-8">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          SectionHeader — left align
        </p>
        <SectionHeader
          eyebrow="Automation Platform"
          headline="Scale your presence, not your workload"
          description="Surgent deploys autonomous AI agents that handle your most complex workflows end-to-end — from lead qualification to content delivery."
          align="left"
        />

        <Separator className="bg-surgent-border" />

        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
          SectionHeader — center align
        </p>
        <SectionHeader
          eyebrow="Trusted by industry leaders"
          headline="Agents for every marketing channel"
          description="Every workflow. Every channel. One platform. Built for teams that move fast."
          align="center"
        />
      </div>
    </div>
  );
}
