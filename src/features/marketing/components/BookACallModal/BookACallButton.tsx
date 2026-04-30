"use client";

import { useBookACall } from "./BookACallContext";
import { SurgentButton } from "@/components/surgent/SurgentButton";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BookACallButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

export function BookACallButton({ children = "Book a Call", ...props }: BookACallButtonProps) {
  const { setOpen } = useBookACall();
  return (
    <SurgentButton onClick={() => setOpen(true)} {...props}>
      {children}
    </SurgentButton>
  );
}
