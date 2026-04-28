"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { SurgentButton } from "@/components/surgent/SurgentButton";
import { ThemeToggle } from "@/components/surgent/ThemeToggle";

export interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Product", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
];

export function NavBar({
  links = defaultLinks,
  ctaLabel = "Get Started",
  ctaHref = "#",
  className,
}: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-surgent-border bg-surgent-background/90 backdrop-blur-sm",
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Surgent — home">
          <span
            aria-hidden
            className="size-2 rounded-none bg-surgent-primary transition-all duration-200 group-hover:shadow-[0_0_8px_oklch(82.55%_0.182_145_/_0.6)]"
          />
          <span className="font-mono text-sm font-semibold uppercase tracking-[0.12em] text-surgent-foreground">
            Surgent
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
          <SurgentButton variant="ghost" size="sm" onClick={() => {}}>
            Sign In
          </SurgentButton>
          <SurgentButton variant="primary" size="sm" onClick={() => router.push(ctaHref)}>
            {ctaLabel}
          </SurgentButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex cursor-pointer items-center justify-center rounded-sm p-1.5 text-surgent-muted hover:text-surgent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surgent-primary/80 md:hidden"
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
            className="overflow-hidden border-t border-surgent-border bg-surgent-background md:hidden"
          >
            <nav className="flex flex-col divide-y divide-surgent-border/40 px-6">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-surgent-muted hover:text-surgent-foreground transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 py-4">
                <div className="flex justify-end pb-1">
                  <ThemeToggle />
                </div>
                <SurgentButton variant="ghost" size="md" className="w-full justify-center">
                  Sign In
                </SurgentButton>
                <SurgentButton
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => router.push(ctaHref)}
                >
                  {ctaLabel}
                </SurgentButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
