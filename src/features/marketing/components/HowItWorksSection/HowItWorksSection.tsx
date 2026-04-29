"use client";

import { motion } from "framer-motion";
import { EyebrowLabel } from "@/components/surgent/EyebrowLabel";

const steps = [
  {
    number: "01",
    title: "AI Opportunity Audit",
    description:
      "We map how work moves through your organization — across teams, systems, and decision points — to identify where agents can reduce overhead or replace manual coordination.",
  },
  {
    number: "02",
    title: "Process Architecture",
    description:
      "We design and build the agent system that will execute the workflow, integrating it with the enterprise tools, data, and operational logic that power the process.",
  },
  {
    number: "03",
    title: "Production Deployment",
    description:
      "We deploy into your live stack — connecting agents to live systems so they begin executing operational work in production. No migrations required.",
  },
  {
    number: "04",
    title: "Agent Optimization",
    description:
      "After deployment, we strengthen decision logic, increase reliability, and extend agents into new operational responsibilities over time.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-t border-surgent-border py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div className="flex flex-col gap-4">
          <EyebrowLabel>How It Works</EyebrowLabel>
          <h2 className="max-w-xl font-sans text-3xl font-bold leading-tight tracking-[-0.03em] text-surgent-foreground md:text-4xl">
            From audit to production in weeks, not months.
          </h2>
        </div>
        <div className="grid gap-px border border-surgent-border bg-surgent-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col gap-6 bg-surgent-background p-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.07 }}
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-surgent-muted">
                Step {step.number}
              </span>
              <h3 className="font-sans text-base font-semibold leading-snug text-surgent-foreground">
                {step.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-surgent-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
