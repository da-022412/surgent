"use client";

import { createContext, useContext, useState, useSyncExternalStore } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const COOKIE_NAME = "surgent-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

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

interface ConsentContextValue {
  visible: boolean;
  accept: () => void;
  decline: () => void;
}

const ConsentContext = createContext<ConsentContextValue>({
  visible: false,
  accept: () => {},
  decline: () => {},
});

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [dismissed, setDismissed] = useState(false);
  const cookieValue = useSyncExternalStore(subscribe, readConsentCookie, () => "ssr");
  const visible = !dismissed && cookieValue === null;

  function accept() {
    setConsentCookie("granted");
    updateGtagConsent(true);
    setDismissed(true);
  }

  function decline() {
    setConsentCookie("denied");
    updateGtagConsent(false);
    setDismissed(true);
  }

  return (
    <ConsentContext.Provider value={{ visible, accept, decline }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}
