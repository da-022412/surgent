"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

interface SurgentButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
}

interface SurgentButtonAsButton
  extends SurgentButtonBaseProps, Omit<HTMLMotionProps<"button">, "children" | "className"> {
  href?: undefined;
}

interface SurgentButtonAsAnchor
  extends SurgentButtonBaseProps, Omit<HTMLMotionProps<"a">, "children" | "className"> {
  href: string;
}

type SurgentButtonProps = SurgentButtonAsButton | SurgentButtonAsAnchor;

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

const motionProps = {
  whileHover: { y: -1 },
  whileTap: { y: 0, scale: 0.97 },
  transition: { duration: 0.1, ease: "easeOut" },
} as const;

export function SurgentButton({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: SurgentButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm font-mono font-medium uppercase tracking-widest",
    "transition-all duration-200 outline-none",
    "focus-visible:ring-2 focus-visible:ring-surgent-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-surgent-background",
    "disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    sizes[size],
    className
  );

  if (href !== undefined) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...(props as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      type="button"
      {...motionProps}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}
