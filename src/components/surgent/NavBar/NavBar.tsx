"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/surgent/ThemeToggle";
import { BookACallButton } from "@/features/marketing/components/BookACallModal";

export interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  links?: NavLink[];
  ctaLabel?: string;
  className?: string;
}

const defaultLinks: NavLink[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Agents", href: "#agents" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "FAQ", href: "#faq" },
];

export function NavBar({ links = defaultLinks, ctaLabel = "Book a Call", className }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-surgent-border bg-surgent-background/90 backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2" aria-label="SurgentAI — home">
          <span
            aria-hidden
            className="size-2 rounded-none bg-surgent-primary transition-all duration-200 group-hover:shadow-[0_0_8px_oklch(82.55%_0.182_145_/_0.6)]"
          />
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-surgent-foreground">
            SurgentAI
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-surgent-muted transition-colors hover:text-surgent-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <BookACallButton variant="primary" size="sm">
            {ctaLabel}
          </BookACallButton>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex cursor-pointer items-center justify-center rounded-sm p-1.5 text-surgent-muted hover:text-surgent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surgent-primary/80"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <X className="size-4" aria-hidden />
            ) : (
              <Menu className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-surgent-border bg-surgent-background md:hidden"
          >
            <nav className="flex flex-col divide-y divide-surgent-border/40 px-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-surgent-muted transition-colors hover:text-surgent-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-4">
                <BookACallButton variant="primary" size="md" className="w-full justify-center">
                  {ctaLabel}
                </BookACallButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
