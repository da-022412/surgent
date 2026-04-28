import { cn } from "@/lib/utils";
import { EyebrowLabel } from "@/components/surgent/EyebrowLabel";

interface SectionHeaderProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <EyebrowLabel>{eyebrow}</EyebrowLabel>}
      <h2
        className={cn(
          "font-sans text-3xl font-bold leading-tight tracking-[-0.03em] text-surgent-foreground",
          "md:text-4xl"
        )}
      >
        {headline}
      </h2>
      {description && (
        <p
          className={cn(
            "font-sans text-base leading-relaxed text-surgent-muted",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
