"use client";

import { SurgentInputField } from "@/components/surgent/SurgentInputField";
import { SurgentTextarea } from "@/components/surgent/SurgentTextarea";
import { SurgentSelect } from "@/components/surgent/SurgentSelect";
import { Checkbox } from "@/components/ui/Checkbox";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";

const agentTypeOptions = [
  { value: "outbound", label: "Outbound Qualifier" },
  { value: "content", label: "Content Generator" },
  { value: "analytics", label: "Analytics Reporter" },
  { value: "research", label: "Research Agent" },
];

export function FormShowcase() {
  return (
    <div className="space-y-10">
      {/* Text inputs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SurgentInputField label="Agent Name" placeholder="e.g. outbound-qualifier-v2" />
        <SurgentInputField label="API Endpoint" placeholder="https://api.surgent.ai/v1/run" />
        <SurgentInputField
          label="With Hint"
          placeholder="my-workflow"
          hint="Lowercase, hyphens only. Used as workflow identifier."
        />
        <SurgentInputField
          label="With Error"
          placeholder="Enter value"
          defaultValue="invalid-value!"
          error="Only alphanumeric characters and hyphens are allowed."
        />
        <SurgentInputField label="Disabled" placeholder="Read-only" disabled />
      </div>

      <div className="border-t border-surgent-border" />

      {/* Select */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SurgentSelect
          label="Agent Type"
          placeholder="Select agent type…"
          options={agentTypeOptions}
        />
        <SurgentSelect
          label="Disabled Select"
          placeholder="Not available"
          options={agentTypeOptions}
          disabled
        />
      </div>

      <div className="border-t border-surgent-border" />

      {/* Textarea */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SurgentTextarea
          label="System Prompt"
          placeholder="You are an AI agent that…"
          hint="Define the agent's role and constraints."
        />
        <SurgentTextarea
          label="Prompt Error State"
          placeholder="Enter prompt…"
          error="System prompt cannot be empty."
        />
      </div>

      <div className="border-t border-surgent-border" />

      {/* Toggles */}
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex items-center gap-2.5">
          <Switch id="toggle-active" />
          <Label
            htmlFor="toggle-active"
            className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-surgent-muted cursor-pointer"
          >
            Agent Active
          </Label>
        </div>
        <div className="flex items-center gap-2.5">
          <Switch id="toggle-logging" defaultChecked />
          <Label
            htmlFor="toggle-logging"
            className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-surgent-muted cursor-pointer"
          >
            Enable Logging
          </Label>
        </div>
        <div className="flex items-center gap-2.5">
          <Checkbox id="check-terms" />
          <Label
            htmlFor="check-terms"
            className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-surgent-muted cursor-pointer"
          >
            Accept Terms
          </Label>
        </div>
        <div className="flex items-center gap-2.5">
          <Checkbox id="check-notify" defaultChecked />
          <Label
            htmlFor="check-notify"
            className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-surgent-muted cursor-pointer"
          >
            Email Notifications
          </Label>
        </div>
      </div>
    </div>
  );
}
