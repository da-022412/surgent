"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface DataCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  title?: string;
  meta?: string;
  accent?: boolean;
  children?: React.ReactNode;
}

export function DataCard({
  title,
  meta,
  accent = true,
  className,
  children,
  ...props
}: DataCardProps) {
  return (
    <motion.div
      className={cn(
        "relative flex flex-col gap-3 rounded-sm border border-surgent-border bg-surgent-surface p-4",
        "transition-all duration-200",
        "hover:border-surgent-primary/40 hover:shadow-[0_0_24px_oklch(82.55%_0.182_145_/_0.07)]",
        className
      )}
      {...props}
    >
      {accent && (
        <span
          aria-hidden
          className="absolute left-0 right-0 top-0 h-0.5 rounded-t-sm bg-surgent-primary"
        />
      )}

      {(title || meta) && (
        <div className="flex items-start justify-between gap-2 pt-0.5">
          {title && (
            <p className="text-sm font-semibold leading-snug text-surgent-foreground tracking-tight">
              {title}
            </p>
          )}
          {meta && (
            <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
              {meta}
            </span>
          )}
        </div>
      )}

      {children}
    </motion.div>
  );
}
