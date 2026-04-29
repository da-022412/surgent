import Link from "next/link";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Navigate: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Agents", href: "#agents" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Social: [
    { label: "X / Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="border-t border-surgent-border">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-none bg-surgent-primary" aria-hidden />
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-surgent-foreground">
                Surgent
              </span>
            </div>
            <p className="max-w-[180px] font-sans text-sm leading-relaxed text-surgent-muted">
              AI agent systems that execute operational workflows inside enterprise organizations.
            </p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-surgent-muted">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-surgent-muted/70 transition-colors hover:text-surgent-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-surgent-border/60 pt-8 md:flex-row">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted/50">
            © 2026 Surgent AI, Inc. All rights reserved.
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted/50">
            Company names and logos are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
