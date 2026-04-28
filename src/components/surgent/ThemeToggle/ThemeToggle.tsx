"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribe(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, { attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => true;

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !isDark;
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("surgent-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("surgent-theme", "light");
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="flex cursor-pointer items-center justify-center rounded-sm p-1.5 text-surgent-muted transition-colors hover:text-surgent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surgent-primary/80"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="size-4" aria-hidden /> : <Moon className="size-4" aria-hidden />}
    </button>
  );
}
