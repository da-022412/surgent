import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-sm prose-surgent max-w-none",
        "prose-headings:font-sans prose-headings:tracking-tight prose-headings:font-semibold",
        "prose-p:font-sans prose-p:leading-relaxed",
        "prose-a:no-underline hover:prose-a:underline",
        "prose-code:rounded-sm prose-code:border prose-code:border-surgent-border prose-code:bg-surgent-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-[0.85em] prose-code:before:content-none prose-code:after:content-none",
        "prose-pre:rounded-sm prose-pre:border prose-pre:border-surgent-border",
        "prose-blockquote:border-l-surgent-primary prose-blockquote:not-italic prose-blockquote:font-normal",
        "prose-hr:border-surgent-border",
        "prose-li:marker:text-surgent-muted",
        className
      )}
    >
      {children}
    </div>
  );
}
