"use client";

import { motion } from "framer-motion";
import { Clock, Zap, Sparkles } from "lucide-react";
import { EyebrowLabel } from "@/components/surgent/EyebrowLabel";

const pillars = [
  {
    icon: Clock,
    title: "Give Your Team Their Time Back",
    description:
      "AI agents take over the manual, repetitive work — chasing approvals, updating records, moving information between tools — so your team stops doing it.",
  },
  {
    icon: Zap,
    title: "Get More Done Without Hiring",
    description:
      "Tasks that used to require multiple people going back and forth now happen automatically. Your team gets more output without more headcount.",
  },
  {
    icon: Sparkles,
    title: "Keep the Tools You Already Use",
    description:
      "Agents work inside your existing software — no migrations, no switching costs. Your team keeps working the way they always have, just faster.",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-surgent-border py-10 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <EyebrowLabel>Why It Matters</EyebrowLabel>
          <h2 className="max-w-2xl font-sans text-3xl font-bold leading-tight tracking-[-0.03em] text-surgent-foreground md:text-4xl">
            The businesses pulling ahead aren&apos;t working harder. They&apos;ve just stopped doing
            the work that shouldn&apos;t require a person.
          </h2>
          <p className="max-w-xl font-sans text-base leading-relaxed text-surgent-muted">
            AI agents handle the repetitive work so your team can focus on what actually grows your
            business.
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
