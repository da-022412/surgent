"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

interface SurgentAlertProps {
  variant?: AlertVariant;
  title?: string;
  description: string;
  className?: string;
}

const variantStyles: Record<AlertVariant, { container: string; title: string; dot: string }> = {
  info: {
    container: "border-surgent-border bg-surgent-surface",
    title: "text-surgent-foreground",
    dot: "bg-surgent-muted",
  },
  success: {
    container: "border-surgent-primary/30 bg-surgent-primary/5",
    title: "text-surgent-primary",
    dot: "bg-surgent-primary",
  },
  warning: {
    container: "border-yellow-500/30 bg-yellow-500/5",
    title: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  error: {
    container: "border-destructive/30 bg-destructive/5",
    title: "text-destructive",
    dot: "bg-destructive",
  },
};

export function SurgentAlert({
  variant = "info",
  title,
  description,
  className,
}: SurgentAlertProps) {
  const styles = variantStyles[variant];

  return (
    <Alert className={cn("rounded-sm flex items-start gap-3", styles.container, className)}>
      <span className={cn("mt-1 size-1.5 shrink-0 rounded-full", styles.dot)} />
      <div className="flex-1 min-w-0">
        {title && (
          <AlertTitle
            className={cn("font-mono text-[0.7rem] uppercase tracking-[0.1em] mb-1", styles.title)}
          >
            {title}
          </AlertTitle>
        )}
        <AlertDescription className="font-sans text-sm text-surgent-muted leading-relaxed">
          {description}
        </AlertDescription>
      </div>
    </Alert>
  );
}
