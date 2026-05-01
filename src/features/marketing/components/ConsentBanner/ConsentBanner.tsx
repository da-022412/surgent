"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SurgentButton } from "@/components/surgent/SurgentButton";
import { useConsent } from "./ConsentContext";

export function ConsentBanner() {
  const { visible, accept, decline } = useConsent();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 z-50 w-full sm:bottom-6 sm:left-6 sm:w-80"
        >
          <div className="relative overflow-hidden rounded-t-md border border-b-0 border-surgent-border bg-surgent-surface p-5 shadow-[0_0_20px_oklch(82.55%_0.182_145_/_0.2)] sm:rounded-md sm:border-b">
            <span className="absolute inset-x-0 top-0 h-0.5 bg-surgent-primary" />
            <p className="mb-1 text-sm text-surgent-foreground">
              We use analytics to understand how visitors use this site.
            </p>
            <p className="mb-4 text-xs text-surgent-muted">
              No ad tracking or profiling. You can change this at any time.
            </p>
            <div className="flex justify-end gap-2">
              <SurgentButton variant="ghost" size="sm" onClick={decline}>
                Decline
              </SurgentButton>
              <SurgentButton variant="primary" size="sm" onClick={accept}>
                Accept
              </SurgentButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
