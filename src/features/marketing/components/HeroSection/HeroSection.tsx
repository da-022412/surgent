"use client";

import { motion } from "framer-motion";
import { EyebrowLabel } from "@/components/surgent/EyebrowLabel";
import { DataCard } from "@/components/surgent/DataCard";
import { SurgentButton } from "@/components/surgent/SurgentButton";
import { BookACallButton } from "@/features/marketing/components/BookACallModal";

const agents = [
  { name: "Lead Qualifier", active: true, metric: "2,847", unit: "leads / mo" },
  { name: "Invoice Processor", active: true, metric: "1,203", unit: "invoices / mo" },
  { name: "Content Scheduler", active: false, metric: "891", unit: "posts / mo" },
  { name: "Support Triage", active: true, metric: "4,120", unit: "tickets / mo" },
];

const stats = [
  { value: "99.9%", label: "Uptime" },
  { value: "9,061", label: "Tasks / mo" },
  { value: "0", label: "Errors" },
];

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-20 pt-10 text-center sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <EyebrowLabel>Business Owners</EyebrowLabel>
      </motion.div>

      <motion.h1
        className="max-w-3xl font-sans text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-surgent-foreground md:text-[4.5rem]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.06 }}
      >
        Ready to Transform
        <br />
        <span className="text-surgent-primary">Your Business With AI?</span>
      </motion.h1>

      <motion.p
        className="max-w-lg font-sans text-base leading-relaxed text-surgent-muted"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.12 }}
      >
        SurgentAI builds custom AI agents for your business — so your team spends less time on
        repetitive work and more time on what actually moves the needle.
      </motion.p>

      <motion.div
        className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.18 }}
      >
        <BookACallButton variant="primary" size="lg">
          Book a Discovery Call
        </BookACallButton>
        <SurgentButton variant="ghost" size="lg" href="#how-it-works">
          See How It Works
        </SurgentButton>
      </motion.div>

      <motion.div
        className="mt-4 w-full max-w-2xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.28 }}
      >
        <DataCard title="Active Agents" meta="Live · 3 running">
          <div className="flex flex-col divide-y divide-surgent-border/40">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className="relative flex size-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor: agent.active
                        ? "oklch(82.55% 0.182 145)"
                        : "oklch(60% 0.01 250)",
                    }}
                  />
                  <span className="truncate font-sans text-sm text-surgent-foreground">
                    {agent.name}
                  </span>
                </div>
                <div className="ml-4 shrink-0 text-right">
                  <span className="font-mono text-sm font-semibold text-surgent-foreground">
                    {agent.metric}
                  </span>
                  <span className="ml-1.5 font-mono text-[0.55rem] uppercase tracking-[0.08em] text-surgent-muted">
                    {agent.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-1 flex gap-6 border-t border-surgent-border/40 pt-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-sm font-semibold text-surgent-primary">
                  {stat.value}
                </div>
                <div className="font-mono text-[0.55rem] uppercase tracking-[0.08em] text-surgent-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </DataCard>
      </motion.div>
    </section>
  );
}
