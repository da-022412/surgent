"use client";

import { MotionConfig } from "framer-motion";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { BookACallProvider, BookACallModal } from "@/features/marketing/components/BookACallModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <BookACallProvider>
          {children}
          <BookACallModal />
        </BookACallProvider>
      </TooltipProvider>
    </MotionConfig>
  );
}
