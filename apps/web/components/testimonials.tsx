import Image from 'next/image'
import { Card } from '@/components/ui/card'

const testimonials = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/47919550?v=4',
        name: 'Marcus Chen',
        role: 'Founder, Velocity Labs',
        quote: 'Surgent cut our outreach time in half. We went from manually sending 20 emails a day to running agents across our entire book of business.',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/68236786?v=4',
        name: 'Priya Nair',
        role: 'Marketing Director, Bloom Agency',
        quote: 'I was skeptical about AI tools but Surgent actually just works. It connected to our CRM in minutes and the agents were running the same day.',
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/12345678?v=4',
        name: 'James Okafor',
        role: 'Managing Partner, Okafor & Associates',
        quote: "We use Surgent for client intake, deadline tracking, and follow-ups. It handles the admin so we can bill more hours.",
    },
    {
        avatar: 'https://avatars.githubusercontent.com/u/34567890?v=4',
        name: 'Sofia Reyes',
        role: 'Head of Operations, Redpoint Growth',
        quote: 'The integrations are what sold us. Everything we already used — Slack, our CRM, email — Surgent plugged right in without any IT support.',
    },
]

export default function Testimonials() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">Don't Take Our Word for It</h2>
                    <p className="text-muted-foreground text-balance">From solo founders to law firms and growing agencies — here's what teams are saying about Surgent.</p>
                </div>
                <div className="@xl:grid-cols-2 mt-12 grid gap-3">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            variant="outline"
                            className="text-foreground flex items-end gap-3 rounded-2xl p-4 text-sm">
                            <div className="before:border-foreground/10 relative size-5 shrink-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="rounded-full object-cover"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className="space-y-6">
                                <p className="text-foreground text-lg">{testimonial.quote}</p>

                                <div className="space-y-1">
                                    <p className="text-muted-foreground text-sm font-medium">{testimonial.name}</p>
                                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
