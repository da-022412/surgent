"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/surgent/SectionHeader";
import { DataCard } from "@/components/surgent/DataCard";

const deployments = [
  {
    department: "Accounting & Finance",
    description:
      "Agents handle invoicing, reconciliation, and reporting so your books stay current without someone manually chasing it down.",
    capabilities: [
      "Invoice processing",
      "Reconciliation",
      "Financial reporting",
      "Cash flow tracking",
    ],
  },
  {
    department: "Sales & Revenue",
    description:
      "Agents keep your CRM updated, follow up with leads, and surface the right information so your team spends time selling, not doing admin.",
    capabilities: ["Lead follow-up", "CRM updates", "Pipeline reporting", "Commission tracking"],
  },
  {
    department: "Purchasing & Vendors",
    description:
      "Agents handle purchase requests, vendor communication, and approval routing so nothing sits waiting on someone's desk.",
    capabilities: [
      "Vendor onboarding",
      "Approval routing",
      "Contract coordination",
      "Supplier communication",
    ],
  },
  {
    department: "Compliance & Reporting",
    description:
      "Agents track deadlines, pull together documentation, and flag anything that needs attention before it becomes a problem.",
    capabilities: [
      "Deadline tracking",
      "Audit documentation",
      "Policy monitoring",
      "Exception flagging",
    ],
  },
  {
    department: "Operations & Logistics",
    description:
      "Agents monitor inventory, flag issues early, and coordinate with suppliers — so your operations keep moving without constant oversight.",
    capabilities: [
      "Inventory tracking",
      "Issue detection & routing",
      "Supplier coordination",
      "Quality monitoring",
    ],
  },
  {
    department: "HR & Onboarding",
    description:
      "Agents handle new hire workflows, policy distribution, and internal requests so your team spends time on people, not paperwork.",
    capabilities: [
      "Onboarding workflows",
      "Policy updates",
      "Internal routing",
      "Compliance tracking",
    ],
  },
];

export function AgentTypesSection() {
  return (
    <section id="agents" className="border-t border-surgent-border py-10 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="Where We Deploy"
          headline="Built for the functions that run your business."
          description="Built for the parts of your business where your team's time is most likely going to waste."
          align="center"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deployments.map((item, index) => (
            <motion.div
              key={item.department}
              className="h-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
            >
              <DataCard className="h-full gap-4">
                <h3 className="font-sans text-base font-semibold leading-snug text-surgent-foreground">
                  {item.department}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-surgent-muted">
                  {item.description}
                </p>
                <ul className="flex flex-col gap-1.5 border-t border-surgent-border/40 pt-4">
                  {item.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2">
                      <span className="size-1 shrink-0 rounded-none bg-surgent-primary/60" />
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-surgent-muted">
                        {cap}
                      </span>
                    </li>
                  ))}
                </ul>
              </DataCard>
            </motion.div>
          ))}
        </div>

        <p className="text-center font-mono text-[0.6rem] uppercase tracking-[0.15em] text-surgent-muted">
          + 300 additional workflows
        </p>
      </div>
    </section>
  );
}
