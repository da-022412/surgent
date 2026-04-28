"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";

export interface AccordionEntry {
  value: string;
  question: string;
  answer: string;
}

interface SurgentAccordionProps {
  items: AccordionEntry[];
  defaultOpen?: string;
  className?: string;
}

export function SurgentAccordion({ items, defaultOpen, className }: SurgentAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen ? [defaultOpen] : []);

  return (
    <Accordion
      value={openItems}
      onValueChange={setOpenItems}
      multiple
      className={cn("divide-y divide-surgent-border border-y border-surgent-border", className)}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="border-none">
          <AccordionTrigger
            className={cn(
              "py-5 font-sans text-sm font-medium text-surgent-foreground",
              "hover:text-surgent-primary hover:no-underline",
              "data-[panel-open]:text-surgent-primary",
              "transition-colors duration-150"
            )}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 font-sans text-sm leading-relaxed text-surgent-muted">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
