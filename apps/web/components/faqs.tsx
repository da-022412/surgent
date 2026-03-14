'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'What is Claro and who is it built for?',
        answer: 'Claro is an AI automation platform built for founders, marketers, agencies, lawyers, and SMB owners. If you're managing workflows, outreach, or pipelines manually — Claro builds the agents that replace that work.',
    },
    {
        id: 'item-2',
        question: 'How is Claro different from other AI tools?',
        answer: 'Most AI platforms are either too generic to be useful or too enterprise to be accessible. Claro gives you custom agents connected to your real tools, automating your actual workflows — without an 18-month implementation or a $30M minimum.',
    },
    {
        id: 'item-3',
        question: 'Do I need technical skills to get started?',
        answer: 'No. If you can describe your workflow, Claro can automate it. Most teams are up and running within 24 hours — no developers required.',
    },
    {
        id: 'item-4',
        question: 'What tools does Claro integrate with?',
        answer: 'Claro integrates with the tools you already use — CRM, email, project management, billing, and more. Setup takes hours, not months, and nothing in your existing stack needs to change.',
    },
    {
        id: 'item-5',
        question: 'How do I get started?',
        answer: "Book a demo and we'll walk you through your first agent live. Most teams have their first agent running by the end of the call.",
    },
]

export default function FAQs() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <h2 className="text-center font-serif text-4xl font-medium">Good Questions. Here Are the Answers.</h2>
                <Accordion
                    type="single"
                    collapsible
                    className="mt-12">
                    {faqItems.map((item) => (
                        <div
                            className="group"
                            key={item.id}>
                            <AccordionItem
                                value={item.id}
                                className="data-[state=open]:bg-muted/50 peer rounded-xl border-none px-5 py-1 transition-colors">
                                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                            <hr className="mx-5 group-last:hidden peer-data-[state=open]:opacity-0" />
                        </div>
                    ))}
                </Accordion>
                <p className="text-muted-foreground mt-8 text-center text-sm">
                    Can't find what you're looking for?{' '}
                    <Link
                        href="#"
                        className="text-primary font-medium hover:underline">
                        Contact us
                    </Link>
                </p>
            </div>
        </section>
    )
}
