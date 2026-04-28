"use client";

import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

interface SurgentInputFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  hint?: string;
  error?: string;
}

export function SurgentInputField({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: SurgentInputFieldProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted"
        >
          {label}
        </label>
      )}
      <Input
        id={inputId}
        className={cn(
          "rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground",
          "placeholder:text-surgent-muted",
          "focus-visible:border-surgent-primary focus-visible:ring-surgent-primary/20",
          "disabled:opacity-40",
          error &&
            "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={hint || error ? `${inputId}-hint` : undefined}
        {...props}
      />
      {(hint || error) && (
        <p
          id={`${inputId}-hint`}
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
