import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowDown } from "lucide-react"

export function KaiynWorkflowPreview() {
  const steps = [
    { label: "Signal", type: "input" },
    { label: "Parse", type: "process" },
    { label: "Confirm", type: "user" },
    { label: "Validate", type: "process" },
    { label: "Execute", type: "action" },
    { label: "Audit", type: "storage" },
  ]

  const chips = ["1R Risk", "PostgreSQL", "Encrypted API", "Docker", "CI/CD"]

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-sm">
      {/* Workflow nodes */}
      <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div
              className={`flex items-center justify-center rounded-md border px-3 py-2 font-medium shadow-sm transition-transform hover:scale-105 ${
                step.type === "input"
                  ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                  : step.type === "user"
                    ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                    : step.type === "action"
                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                      : "border-border/50 bg-background/50 text-foreground"
              }`}
            >
              {step.label}
            </div>
            {idx < steps.length - 1 && (
              <>
                <ArrowRight className="text-muted-foreground/50 hidden h-4 w-4 sm:block" />
                <ArrowDown className="text-muted-foreground/50 block h-4 w-4 sm:hidden" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Tech/Risk Chips */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {chips.map((chip) => (
          <Badge
            key={chip}
            variant="secondary"
            className="bg-muted/50 text-xs font-normal"
          >
            {chip}
          </Badge>
        ))}
      </div>
    </div>
  )
}
