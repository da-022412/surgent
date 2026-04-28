"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

interface SurgentSelectProps {
  id?: string;
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string | null) => void;
  hint?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function SurgentSelect({
  id,
  label,
  placeholder = "Select…",
  options,
  value,
  onValueChange,
  hint,
  error,
  disabled,
  className,
}: SurgentSelectProps) {
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
      <Select value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger
          id={fieldId}
          className={cn(
            "rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground",
            "focus:border-surgent-primary focus:ring-surgent-primary/20",
            "disabled:opacity-40",
            error && "border-destructive",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={hint || error ? `${fieldId}-hint` : undefined}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground">
          {options.map((opt) => (
            <SelectItem
              key={opt.value}
              value={opt.value}
              className="font-sans focus:bg-surgent-primary/10 focus:text-surgent-primary"
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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
