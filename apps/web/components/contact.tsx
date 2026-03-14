import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div>
                    <h1 className="text-balance font-serif text-4xl font-medium sm:text-5xl">Get in Touch</h1>
                    <p className="text-muted-foreground mt-4 max-w-md text-balance">Got a workflow you want to automate? A process that's eating your team's time? Tell us about it.</p>
                </div>

                <div className="@xl:grid-cols-5 mt-12 grid gap-8">
                    <div className="@xl:col-span-2 space-y-6 *:space-y-2">
                        <div>
                            <p className="text-foreground text-sm font-medium">Email</p>
                            <Link
                                href="mailto:hello@claroai.com"
                                className="text-muted-foreground hover:text-primary text-sm">
                                hello@claroai.com
                            </Link>
                        </div>

                    </div>

                    <Card
                        variant="outline"
                        className="@xl:col-span-3 p-6">
                        <form
                            action=""
                            className="space-y-5">
                            <div className="@md:grid-cols-2 grid gap-4">
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-sm">
                                        Name
                                    </Label>
                                    <Input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-sm">
                                        Email
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="subject"
                                    className="text-sm">
                                    Subject
                                </Label>
                                <Input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What do you want to automate?"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="message"
                                    className="text-sm">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Describe your workflow or process"
                                    required
                                    className="min-h-28"
                                />
                            </div>

                            <Button className="w-full">Send Message</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}
