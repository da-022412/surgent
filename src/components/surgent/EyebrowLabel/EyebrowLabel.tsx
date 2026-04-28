import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function EyebrowLabel({ children, className }: EyebrowLabelProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-surgent-primary",
        className
      )}
    >
      <span className="inline-block size-1 rounded-full bg-surgent-primary" aria-hidden />
      {children}
    </p>
  );
}
