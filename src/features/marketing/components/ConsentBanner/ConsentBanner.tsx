"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SurgentButton } from "@/components/surgent/SurgentButton";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const COOKIE_NAME = "surgent-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function readConsentCookie(): string | null {
  const m = document.cookie.match(/(?:^|; )surgent-consent=([^;]*)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function subscribe() {
  return () => {};
}

function setConsentCookie(value: "granted" | "denied") {
  document.cookie = `${COOKIE_NAME}=${value}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

function updateGtagConsent(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export function ConsentBanner() {
  const [dismissed, setDismissed] = useState(false);
  // Server snapshot returns a non-null sentinel so the banner is absent from SSR HTML.
  // On the client, useSyncExternalStore reads the real cookie.
  const cookieValue = useSyncExternalStore(subscribe, readConsentCookie, () => "ssr");

  const visible = !dismissed && cookieValue === null;

  function handleAccept() {
    setConsentCookie("granted");
    updateGtagConsent(true);
    setDismissed(true);
  }

  function handleDecline() {
    setConsentCookie("denied");
    updateGtagConsent(false);
    setDismissed(true);
  }

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
              <SurgentButton variant="ghost" size="sm" onClick={handleDecline}>
                Decline
              </SurgentButton>
              <SurgentButton variant="primary" size="sm" onClick={handleAccept}>
                Accept
              </SurgentButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
