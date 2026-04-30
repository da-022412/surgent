"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/surgent/SectionHeader";
import { DataCard } from "@/components/surgent/DataCard";

const deployments = [
  {
    department: "Finance Operations",
    description:
      "Agents handle accounts payable, accounts receivable, reconciliation, and forecasting. Close your books faster without the overhead.",
    capabilities: [
      "AP exception triage",
      "Cross-system reconciliation",
      "Close readiness tracking",
      "Cash position & forecasting",
    ],
  },
  {
    department: "Revenue Operations",
    description:
      "Agents handle CRM hygiene, deal desk approvals, pipeline reporting, and forecast assembly. Keep reps selling instead of doing ops work.",
    capabilities: [
      "Deal orchestration & routing",
      "CRM auto-enrichment",
      "Forecast intelligence",
      "Commission validation",
    ],
  },
  {
    department: "Procurement",
    description:
      "Agents manage vendor onboarding, purchasing approvals, contract coordination, and supplier communication. Cut cycle times.",
    capabilities: [
      "Vendor onboarding",
      "Approval routing",
      "Contract coordination",
      "Supplier communication",
    ],
  },
  {
    department: "Compliance & Risk",
    description:
      "Agents track regulatory deadlines, assemble audit documentation, and flag exceptions before they become findings.",
    capabilities: [
      "Regulatory deadline tracking",
      "Audit documentation",
      "Policy adherence monitoring",
      "Exception flagging",
    ],
  },
  {
    department: "Logistics Operations",
    description:
      "Agents handle exception detection, demand planning, and supplier coordination across your ERP and WMS systems.",
    capabilities: [
      "Exception detection & routing",
      "Demand sensing",
      "Inventory optimization",
      "Quality defect detection",
    ],
  },
  {
    department: "HR Operations",
    description:
      "Agents automate onboarding workflows, policy updates, and internal routing — so HR focuses on people, not process.",
    capabilities: [
      "Onboarding automation",
      "Policy update distribution",
      "Internal routing",
      "Compliance tracking",
    ],
  },
];

export function AgentTypesSection() {
  return (
    <section id="agents" className="border-t border-surgent-border py-24">
      <div className="mx-auto max-w-6xl space-y-12 px-6">
        <SectionHeader
          eyebrow="Where We Deploy"
          headline="Built for the functions that run your business."
          description="SurgentAI deploys agent systems inside enterprise teams across the operational functions where coordination costs are highest."
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
          + 300 additional enterprise workflows
        </p>
      </div>
    </section>
  );
}
