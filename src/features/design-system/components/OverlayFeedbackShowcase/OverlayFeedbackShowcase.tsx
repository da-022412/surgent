"use client";

import { useState } from "react";
import { SurgentAlert } from "@/components/surgent/SurgentAlert";
import { SurgentAccordion } from "@/components/surgent/SurgentAccordion";
import { Skeleton } from "@/components/ui/Skeleton";
import { Progress } from "@/components/ui/Progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { SurgentButton } from "@/components/surgent/SurgentButton";

const faqItems = [
  {
    value: "item-1",
    question: "What is a Surgent Agent?",
    answer:
      "A Surgent Agent is an autonomous AI workflow unit that handles a specific business process end-to-end — from data ingestion to delivery — without human intervention.",
  },
  {
    value: "item-2",
    question: "How does agent orchestration work?",
    answer:
      "Agents communicate through a shared message bus. Each agent publishes events and subscribes to triggers, forming a directed acyclic graph of tasks that execute in parallel where possible.",
  },
  {
    value: "item-3",
    question: "What integrations are supported?",
    answer:
      "Surgent connects to any system with an API. Native connectors exist for Salesforce, HubSpot, Google Workspace, Slack, and 200+ others via our integration layer.",
  },
];

export function OverlayFeedbackShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* Alerts */}
      <div className="space-y-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted mb-4">
          Alert variants
        </p>
        <SurgentAlert
          variant="success"
          title="Deployment Complete"
          description="Agent v2.4.1 deployed successfully to production. All health checks passed."
        />
        <SurgentAlert
          variant="info"
          title="New Integration Available"
          description="The Salesforce connector has been updated. Review the changelog before upgrading."
        />
        <SurgentAlert
          variant="warning"
          title="Rate Limit Approaching"
          description="API usage is at 87% of your monthly quota. Consider upgrading your plan."
        />
        <SurgentAlert
          variant="error"
          title="Agent Execution Failed"
          description="Task ID 8821 encountered an unhandled exception. Check the error logs for details."
        />
      </div>

      <div className="border-t border-surgent-border" />

      {/* Tabs */}
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted mb-4">
          Tabs
        </p>
        <Tabs defaultValue="overview">
          <TabsList className="bg-surgent-surface border border-surgent-border rounded-sm h-9">
            <TabsTrigger
              value="overview"
              className="rounded-sm font-mono text-[0.65rem] uppercase tracking-[0.08em] data-[state=active]:bg-surgent-primary data-[state=active]:text-surgent-background"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="logs"
              className="rounded-sm font-mono text-[0.65rem] uppercase tracking-[0.08em] data-[state=active]:bg-surgent-primary data-[state=active]:text-surgent-background"
            >
              Logs
            </TabsTrigger>
            <TabsTrigger
              value="config"
              className="rounded-sm font-mono text-[0.65rem] uppercase tracking-[0.08em] data-[state=active]:bg-surgent-primary data-[state=active]:text-surgent-background"
            >
              Config
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 font-sans text-sm text-surgent-muted">
            Agent overview: 24 active, 1,842 tasks completed, 0.3% error rate over 24h.
          </TabsContent>
          <TabsContent value="logs" className="mt-4 font-mono text-xs text-surgent-muted">
            [2026-04-27 14:22:01] INFO Task 8821 started
            <br />
            [2026-04-27 14:22:03] INFO Fetched 240 records
            <br />
            [2026-04-27 14:22:07] OK Delivery confirmed
          </TabsContent>
          <TabsContent value="config" className="mt-4 font-sans text-sm text-surgent-muted">
            Runtime: Node 20 LTS · Region: us-east-1 · Timeout: 300s · Retries: 3
          </TabsContent>
        </Tabs>
      </div>

      <div className="border-t border-surgent-border" />

      {/* Progress + Skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-3">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
            Progress
          </p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-mono text-[0.6rem] text-surgent-muted">Task completion</span>
              <span className="font-mono text-[0.6rem] text-surgent-primary">87%</span>
            </div>
            <Progress
              value={87}
              className="h-1 rounded-none bg-surgent-border [&>div]:bg-surgent-primary [&>div]:rounded-none"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-mono text-[0.6rem] text-surgent-muted">API quota used</span>
              <span className="font-mono text-[0.6rem] text-yellow-400">62%</span>
            </div>
            <Progress
              value={62}
              className="h-1 rounded-none bg-surgent-border [&>div]:bg-yellow-400 [&>div]:rounded-none"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-mono text-[0.6rem] text-surgent-muted">Error rate</span>
              <span className="font-mono text-[0.6rem] text-destructive">3%</span>
            </div>
            <Progress
              value={3}
              className="h-1 rounded-none bg-surgent-border [&>div]:bg-destructive [&>div]:rounded-none"
            />
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted">
            Skeleton (loading state)
          </p>
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4 rounded-sm bg-surgent-surface" />
            <Skeleton className="h-4 w-full rounded-sm bg-surgent-surface" />
            <Skeleton className="h-4 w-5/6 rounded-sm bg-surgent-surface" />
            <Skeleton className="h-4 w-2/3 rounded-sm bg-surgent-surface" />
          </div>
          <Skeleton className="mt-3 h-24 w-full rounded-sm bg-surgent-surface" />
        </div>
      </div>

      <div className="border-t border-surgent-border" />

      {/* Dialog + Tooltip */}
      <div className="flex flex-wrap items-center gap-4">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted w-full">
          Overlays
        </p>
        <SurgentButton variant="primary" size="sm" onClick={() => setDialogOpen(true)}>
          Open Dialog
        </SurgentButton>

        <Tooltip>
          <TooltipTrigger className="inline-flex h-7 items-center justify-center rounded-sm border border-surgent-border bg-transparent px-3 font-mono text-[0.7rem] font-medium uppercase tracking-widest text-surgent-primary transition-colors hover:border-surgent-primary hover:bg-surgent-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surgent-primary/50">
            Hover for Tooltip
          </TooltipTrigger>
          <TooltipContent className="rounded-sm border-surgent-border bg-surgent-surface font-mono text-[0.65rem] text-surgent-foreground">
            Agent v2.4.1 · Last deploy 2m ago
          </TooltipContent>
        </Tooltip>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="rounded-sm border-surgent-border bg-surgent-surface text-surgent-foreground max-w-md">
          <DialogHeader>
            <DialogTitle className="font-sans text-base font-semibold tracking-tight">
              Confirm Agent Deployment
            </DialogTitle>
            <DialogDescription className="font-sans text-sm text-surgent-muted mt-1.5">
              You are about to deploy Agent v2.4.1 to production. This action will replace the
              currently running v2.3.9. All in-flight tasks will complete before the switchover.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-end gap-2 mt-4">
            <SurgentButton variant="ghost" size="sm" onClick={() => setDialogOpen(false)}>
              Cancel
            </SurgentButton>
            <SurgentButton variant="primary" size="sm" onClick={() => setDialogOpen(false)}>
              Deploy Now
            </SurgentButton>
          </div>
        </DialogContent>
      </Dialog>

      <div className="border-t border-surgent-border" />

      {/* Accordion / FAQ */}
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-surgent-muted mb-4">
          Accordion (FAQ pattern)
        </p>
        <SurgentAccordion items={faqItems} />
      </div>
    </div>
  );
}
