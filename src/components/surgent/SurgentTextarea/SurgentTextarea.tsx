"use client";

import { Textarea } from "@/components/ui/Textarea";
import { cn } from "@/lib/utils";

interface SurgentTextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  hint?: string;
  error?: string;
}

export function SurgentTextarea({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: SurgentTextareaProps) {
  const fieldId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={fieldId}
          className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted"
        >
          {label}
        </label>
      )}
      <Textarea
        id={fieldId}
        className={cn(
          "min-h-[100px] rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground",
          "placeholder:text-surgent-muted/50 resize-y",
          "focus-visible:border-surgent-primary focus-visible:ring-surgent-primary/20",
          "disabled:opacity-40",
          error &&
            "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
          className
        )}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={hint || error ? `${fieldId}-hint` : undefined}
        {...props}
      />
      {(hint || error) && (
        <p
          id={`${fieldId}-hint`}
          className={cn(
            "font-mono text-[0.6rem] tracking-[0.05em]",
            error ? "text-destructive" : "text-surgent-muted"
          )}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
