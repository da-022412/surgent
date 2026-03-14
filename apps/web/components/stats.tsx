import { CSSProperties } from 'react'

export default function Stats() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">Why Are You Still Doing This By Hand?</h2>
                    <p className="text-muted-foreground text-balance">Claro gives growing businesses the kind of AI agents that used to require an enterprise budget and a dev team.</p>
                </div>
                <div className="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">Under 24 hours</span> to deploy your first agent.
                        </p>
                    </div>

                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">50+</span> native integrations, ready on day one.
                        </p>
                    </div>

                    <div className="border-y py-6">
                        <p className="text-muted-foreground text-xl">
                            <span className="text-foreground font-medium">Zero</span> tools replaced. Your stack stays exactly as-is.
                        </p>
                    </div>
                </div>
            </div>
            <div
                aria-hidden
                className="mx-auto flex h-72 max-w-5xl items-end justify-between gap-0.5 px-6">
                {Array.from({ length: 48 }, (_, i) => {
                    const progress = i / 47
                    const base = Math.pow(progress, 2.2)
                    const noise = Math.sin(i * 0.7) * 0.08 + Math.sin(i * 1.3) * 0.05
                    const height = Math.min(1, Math.max(0.05, base + noise * (0.3 + progress * 0.7)))
                    return (
                        <div
                            key={i}
                            className="after:h-(--line-height) after:bg-foreground/15 hover:after:bg-primary relative h-full w-px rounded-full duration-200 before:absolute before:inset-0 before:-inset-x-6 after:absolute after:inset-0 after:mt-auto hover:mx-2"
                            style={{ '--line-height': `${height * 100}%` } as CSSProperties}
                        />
                    )
                })}
            </div>
        </section>
    )
}
