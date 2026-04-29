"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/surgent/SectionHeader";
import { SurgentAccordion, type AccordionEntry } from "@/components/surgent/SurgentAccordion";

const faqs: AccordionEntry[] = [
  {
    value: "discovery-call",
    question: "What happens on the discovery call?",
    answer:
      "The discovery call is a working session where we review how operational workflows currently run inside your organization. From there we identify areas where an AI agent could realistically execute work, what systems it would need to interact with, and what a deployment timeline would look like.",
  },
  {
    value: "timeline",
    question: "How long does deployment take?",
    answer:
      "Most deployments move from discovery to a production agent in 6–12 weeks, depending on the complexity of the workflow and the systems involved.",
  },
  {
    value: "what-agents-do",
    question: "What can agents actually do?",
    answer:
      "Agents typically monitor operational systems, analyze incoming data, trigger actions, route approvals, generate internal reports, and coordinate work across tools that previously required manual oversight.",
  },
  {
    value: "existing-tools",
    question: "Do I need to migrate off my existing tools?",
    answer:
      "No. Agents integrate with the systems already running your operations — ERPs, CRMs, internal databases, and data platforms — through APIs and automation layers. No migration required.",
  },
  {
    value: "team-involvement",
    question: "How much work does my team need to do?",
    answer:
      "Your team provides context on the workflow and systems involved — typically under 20 hours across all stakeholders. Surgent handles the design and deployment while coordinating with the appropriate technical or operational contacts.",
  },
  {
    value: "security",
    question: "How do you handle security and access?",
    answer:
      "Agents operate within existing system permissions and enterprise security policies. Access is controlled through integrations, and all agent actions are logged so activity can be monitored and audited.",
  },
  {
    value: "customization",
    question: "Is this customized for our business?",
    answer:
      "Yes. Every deployment is designed around the specific workflows, systems, and operational rules inside your organization. There is no generic software — only agents built for your processes.",
  },
  {
    value: "pricing",
    question: "How is this priced?",
    answer:
      "Engagements are structured based on the complexity of the workflow, the systems involved, and the scope of the deployment. Pricing is discussed after the discovery call once we understand your operational requirements. Typically 90% cheaper than the equivalent FTE cost.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-surgent-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="flex flex-col gap-12 md:flex-row md:gap-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="md:w-72 md:shrink-0">
            <SectionHeader eyebrow="FAQ" headline="Common questions." />
          </div>
          <div className="flex-1">
            <SurgentAccordion items={faqs} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
