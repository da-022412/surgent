"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Sparkles } from "lucide-react";
import { EyebrowLabel } from "@/components/surgent/EyebrowLabel";

const pillars = [
  {
    icon: Clock,
    title: "Reduce Operational Overhead",
    description:
      "AI agents remove manual coordination, approvals, and repetitive operational work across systems — freeing your team for higher-leverage decisions.",
  },
  {
    icon: Zap,
    title: "Accelerate Execution",
    description:
      "Processes that once required multiple team handoffs can now execute continuously. Speed compounds: faster cycles mean faster learning and faster growth.",
  },
  {
    icon: Sparkles,
    title: "Free Your Team to Do Better Work",
    description:
      "When agents handle the repetitive work, your team gets their time back. Less grind, more impact — and the kind of work people actually want to show up for.",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-surgent-border py-10 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <EyebrowLabel>Why It Matters</EyebrowLabel>
          <h2 className="max-w-2xl font-sans text-3xl font-bold leading-tight tracking-[-0.03em] text-surgent-foreground md:text-4xl">
            Only AI-Native Organizations Will Operate at This Level.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-surgent-muted">
            AI agents don&apos;t just automate tasks — they remove the operational bottlenecks that
            slow organizations down.
          </p>
        </div>
        <div className="grid gap-px border border-surgent-border bg-surgent-border md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="flex flex-col gap-6 bg-surgent-background p-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.07 }}
            >
              <pillar.icon className="size-6 text-surgent-primary" strokeWidth={1.5} />
              <h3 className="font-sans text-lg font-semibold leading-snug text-surgent-foreground">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-surgent-muted">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
