"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

interface SurgentButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

const sizes: Record<Size, string> = {
  sm: "h-7 px-3 text-[0.7rem]",
  md: "h-9 px-5 text-[0.8rem]",
  lg: "h-11 px-7 text-[0.85rem]",
};

const variants: Record<Variant, string> = {
  primary: [
    "bg-surgent-primary text-surgent-background border border-surgent-primary",
    "shadow-[0_0_20px_oklch(82.55%_0.182_145_/_0.2)]",
    "hover:shadow-[0_0_30px_oklch(82.55%_0.182_145_/_0.4)]",
    "hover:brightness-105",
  ].join(" "),
  ghost: [
    "bg-transparent text-surgent-primary border border-surgent-border",
    "hover:border-surgent-primary hover:bg-surgent-primary/5",
  ].join(" "),
};

export function SurgentButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: SurgentButtonProps) {
  return (
    <motion.button
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm font-mono font-medium uppercase tracking-widest",
        "transition-all duration-200 outline-none",
        "focus-visible:ring-2 focus-visible:ring-surgent-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surgent-background",
        "disabled:pointer-events-none disabled:opacity-40",
        variants[variant],
        sizes[size],
        className
      )}
      type="button"
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.97 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
