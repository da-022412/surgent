import { Avatar, AvatarFallback } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";

export interface AuthorCardProps {
  name: string;
  role: string;
  bio?: string;
  initials?: string;
  size?: "sm" | "md";
  className?: string;
}

export function AuthorCard({ name, role, bio, initials, size = "md", className }: AuthorCardProps) {
  const avatarInitials =
    initials ??
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  if (size === "sm") {
    return (
      <div className={cn("flex items-center gap-2.5", className)}>
        <Avatar className="size-7 rounded-sm border border-surgent-border">
          <AvatarFallback className="rounded-sm bg-surgent-primary/10 font-mono text-[0.6rem] text-surgent-primary">
            {avatarInitials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-sans text-xs font-medium text-surgent-foreground leading-none">
            {name}
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-surgent-muted mt-0.5">
            {role}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-sm border border-surgent-border bg-surgent-surface p-5",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="size-10 rounded-sm border border-surgent-border">
          <AvatarFallback className="rounded-sm bg-surgent-primary/10 font-mono text-sm text-surgent-primary">
            {avatarInitials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-sans text-sm font-semibold text-surgent-foreground leading-none">
            {name}
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted mt-1">
            {role}
          </p>
        </div>
      </div>
      {bio && <p className="font-sans text-sm leading-relaxed text-surgent-muted">{bio}</p>}
    </div>
  );
}
