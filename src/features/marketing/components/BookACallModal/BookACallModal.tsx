"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { SurgentInputField } from "@/components/surgent/SurgentInputField";
import { SurgentTextarea } from "@/components/surgent/SurgentTextarea";
import { SurgentButton } from "@/components/surgent/SurgentButton";
import { useBookACall } from "./BookACallContext";

interface FormState {
  name: string;
  email: string;
  company: string;
  challenge: string;
}

const emptyForm: FormState = { name: "", email: "", company: "", challenge: "" };

export function BookACallModal() {
  const { open, setOpen } = useBookACall();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/book-a-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setForm(emptyForm);
      }, 300);
    }
  }

  if (!open) {
    return null;
  }

  return (
    <BaseDialog.Root open={open} onOpenChange={handleOpenChange}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 duration-200" />
        <BaseDialog.Popup className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100%-2rem)] sm:max-w-lg -translate-x-1/2 -translate-y-1/2 outline-none duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
          <div className="relative overflow-hidden rounded-sm border border-surgent-border bg-surgent-background shadow-[0_0_60px_oklch(82.55%_0.182_145_/_0.12)]">
            {/* Power rail */}
            <span className="absolute inset-x-0 top-0 h-0.5 bg-surgent-primary" />

            {/* Close */}
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="absolute top-4 right-4 cursor-pointer rounded-sm p-1 text-surgent-muted transition-colors hover:text-surgent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surgent-primary/50"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center gap-5 px-8 py-14 text-center">
                <span className="size-2 bg-surgent-primary" aria-hidden />
                <BaseDialog.Title className="font-sans text-xl font-bold tracking-[-0.02em] text-surgent-foreground">
                  We&apos;ll be in touch.
                </BaseDialog.Title>
                <BaseDialog.Description className="max-w-xs font-sans text-sm leading-relaxed text-surgent-muted">
                  Thanks for reaching out. Someone from the SurgentAI team will follow up shortly.
                </BaseDialog.Description>
                <SurgentButton variant="ghost" size="sm" onClick={() => handleOpenChange(false)}>
                  Close
                </SurgentButton>
              </div>
            ) : (
              <div className="flex flex-col gap-6 p-8">
                <div className="flex flex-col gap-1.5 pr-8">
                  <BaseDialog.Title className="font-sans text-xl font-bold tracking-[-0.02em] text-surgent-foreground">
                    Book a Discovery Call
                  </BaseDialog.Title>
                  <BaseDialog.Description className="font-sans text-sm leading-relaxed text-surgent-muted">
                    Tell us a bit about your business and we&apos;ll identify where AI agents can
                    have the most immediate impact.
                  </BaseDialog.Description>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <SurgentInputField
                      label="Name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                    <SurgentInputField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jane@acme.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <SurgentInputField
                    label="Company"
                    name="company"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={handleChange}
                  />
                  <SurgentTextarea
                    label="What's your biggest operational challenge right now?"
                    name="challenge"
                    placeholder="e.g. We spend 20 hours a week manually reconciling invoices..."
                    value={form.challenge}
                    onChange={handleChange}
                  />
                  {error && (
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.08em] text-destructive">
                      {error}
                    </p>
                  )}
                  <div className="flex justify-end pt-2">
                    <SurgentButton variant="primary" size="md" type="submit" disabled={submitting}>
                      {submitting ? "Sending…" : "Request a Call"}
                    </SurgentButton>
                  </div>
                </form>
              </div>
            )}
          </div>
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
