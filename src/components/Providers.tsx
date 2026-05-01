"use client";

import { MotionConfig } from "framer-motion";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { BookACallProvider, BookACallModal } from "@/features/marketing/components/BookACallModal";
import { ConsentBanner, ConsentProvider } from "@/features/marketing/components/ConsentBanner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <ConsentProvider>
          <BookACallProvider>
            {children}
            <BookACallModal />
            <ConsentBanner />
          </BookACallProvider>
        </ConsentProvider>
      </TooltipProvider>
    </MotionConfig>
  );
}
