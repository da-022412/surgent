"use client";

import { useConsent } from "@/features/marketing/components/ConsentBanner";

export function PageMain({ children }: { children: React.ReactNode }) {
  const { visible } = useConsent();
  return (
    <main
      id="main-content"
      className={`relative transition-[padding] duration-300 ${visible ? "pb-36 sm:pb-0" : ""}`}
    >
      {children}
    </main>
  );
}
