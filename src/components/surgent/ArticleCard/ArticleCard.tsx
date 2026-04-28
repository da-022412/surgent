"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TagBadge } from "@/components/surgent/TagBadge";

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  tag: string;
  author: string;
  date: string;
  readTime: string;
  href?: string;
  thumbnailAlt?: string;
  className?: string;
}

export function ArticleCard({
  title,
  excerpt,
  tag,
  author,
  date,
  readTime,
  href = "#",
  thumbnailAlt,
  className,
}: ArticleCardProps) {
  return (
    <motion.a
      href={href}
      className={cn(
        "group flex flex-col rounded-sm border border-surgent-border bg-surgent-surface overflow-hidden",
        "transition-all duration-200 hover:border-surgent-primary/40",
        "hover:shadow-[0_0_24px_oklch(82.55%_0.182_145_/_0.07)]",
        className
      )}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {/* Thumbnail placeholder */}
      <div
        aria-hidden
        className="relative h-44 w-full bg-surgent-background border-b border-surgent-border overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted/40">
            {thumbnailAlt ?? title}
          </span>
        </div>
        <span className="absolute bottom-0 left-0 right-0 h-px bg-surgent-border" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <TagBadge>{tag}</TagBadge>

        <h3 className="font-sans text-base font-semibold leading-snug tracking-tight text-surgent-foreground group-hover:text-surgent-primary transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="font-sans text-sm leading-relaxed text-surgent-muted line-clamp-3 flex-1">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-surgent-border/60">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
            {author}
          </span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.6rem] text-surgent-muted">{date}</span>
            <span className="font-mono text-[0.6rem] text-surgent-muted">{readTime}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}
