"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const COOKIE_NAME = "surgent-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const GTM_ID = "GTM-PBQMFLW9";

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

function ensureGtmLoaded() {
  if (typeof window === "undefined") return;
  if (document.querySelector(`script[data-gtm-id='${GTM_ID}']`)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  const script = document.createElement("script");
  script.async = true;
  script.dataset.gtmId = GTM_ID;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function loadGtmWhenIdle() {
  if (typeof window === "undefined") return;

  let loaded = false;
  const loadOnce = () => {
    if (loaded) return;
    loaded = true;
    ensureGtmLoaded();
    window.removeEventListener("pointerdown", loadOnce);
    window.removeEventListener("keydown", loadOnce);
    window.removeEventListener("scroll", loadOnce);
  };

  window.addEventListener("pointerdown", loadOnce, { once: true, passive: true });
  window.addEventListener("keydown", loadOnce, { once: true });
  window.addEventListener("scroll", loadOnce, { once: true, passive: true });
}

function updateGtagConsent(granted: boolean) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

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

  useEffect(() => {
    if (cookieValue === "granted") {
      updateGtagConsent(true);
      loadGtmWhenIdle();
    }
  }, [cookieValue]);

  function accept() {
    setConsentCookie("granted");
    ensureGtmLoaded();
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
