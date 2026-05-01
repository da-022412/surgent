"use client";

import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="border-t border-surgent-border py-10 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="flex flex-col gap-12 md:flex-row md:items-start md:gap-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="md:w-1/2">
            <h2 className="font-sans text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-surgent-foreground md:text-5xl">
              We Don&apos;t Just Automate Tasks.{" "}
              <span className="text-surgent-primary">We Transform Departments.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:w-1/2 md:pt-2">
            <p className="font-sans text-base leading-relaxed text-surgent-muted">
              A single automation that saves an hour isn&apos;t transformation. We architect agent
              systems that handle end-to-end workflows — from intake to execution to reporting —
              replacing entire process chains, not individual steps.
            </p>
            <div className="flex flex-col gap-4 border-t border-surgent-border/60 pt-6">
              {[
                "Your finance team operates like it's 3x the size.",
                "Your ops team ships without the backlog.",
                "Your revenue team closes faster.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <span className="mt-[7px] size-1.5 shrink-0 bg-surgent-primary" />
                  <p className="font-sans text-sm font-medium leading-relaxed text-surgent-foreground">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
