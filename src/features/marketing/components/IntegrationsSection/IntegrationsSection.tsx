"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/surgent/SectionHeader";
import { BookACallButton } from "@/features/marketing/components/BookACallModal";

const outerRing = [
  { name: "HubSpot", x: 140, y: 30 },
  { name: "Slack", x: 234, y: 85 },
  { name: "Notion", x: 234, y: 195 },
  { name: "Salesforce", x: 140, y: 250 },
  { name: "Airtable", x: 46, y: 195 },
  { name: "Zapier", x: 46, y: 85 },
];

const innerRing = [
  { name: "Stripe", x: 171, y: 87 },
  { name: "Linear", x: 171, y: 193 },
  { name: "Sheets", x: 78, y: 140 },
];

export function IntegrationsSection() {
  return (
    <section className="border-t border-surgent-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid items-center gap-16 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Fully Integrated"
              headline="Built to Work With Your Systems."
              description="SurgentAI operates across your existing tools — connecting data, workflows, and systems into a single operational layer. We'll never force a migration, but will support you through one if you'd like."
            />
            <div>
              <BookACallButton variant="ghost" size="sm">
                Book a Call
              </BookACallButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-surgent-border bg-surgent-surface">
            <div className="relative flex items-center justify-between border-b border-surgent-border bg-surgent-background/50 px-4 py-3">
              <span className="absolute inset-x-0 top-0 h-0.5 bg-surgent-primary" />
              <span className="font-sans text-sm font-semibold text-surgent-foreground">
                Connected Tools
              </span>
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-surgent-muted">
                28 active
              </span>
            </div>
            <div className="flex items-center justify-center p-6">
              <div className="relative" style={{ width: 280, height: 280 }}>
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at center, oklch(82.55% 0.182 145 / 0.08) 0%, transparent 62%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="rounded-full"
                    style={{
                      width: 220,
                      height: 220,
                      border: "1px dashed oklch(82.55% 0.182 145 / 0.18)",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="rounded-full"
                    style={{
                      width: 124,
                      height: 124,
                      border: "1px dashed oklch(82.55% 0.182 145 / 0.28)",
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex size-10 items-center justify-center rounded-sm bg-surgent-primary"
                    style={{
                      boxShadow:
                        "0 0 28px oklch(82.55% 0.182 145 / 0.4), 0 0 8px oklch(82.55% 0.182 145 / 0.6)",
                    }}
                  >
                    <span className="size-2.5 rounded-none bg-surgent-background" />
                  </div>
                </div>
                {outerRing.map((item) => (
                  <span
                    key={item.name}
                    className="absolute whitespace-nowrap rounded-[2px] border border-surgent-border bg-surgent-background/90 px-1.5 py-[3px] font-mono text-[0.5rem] uppercase tracking-[0.07em] text-surgent-muted"
                    style={{ left: item.x, top: item.y, transform: "translate(-50%, -50%)" }}
                  >
                    {item.name}
                  </span>
                ))}
                {innerRing.map((item) => (
                  <span
                    key={item.name}
                    className="absolute whitespace-nowrap rounded-[2px] border border-surgent-border/50 bg-surgent-background/70 px-1.5 py-[3px] font-mono text-[0.5rem] uppercase tracking-[0.07em] text-surgent-muted/60"
                    style={{ left: item.x, top: item.y, transform: "translate(-50%, -50%)" }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
