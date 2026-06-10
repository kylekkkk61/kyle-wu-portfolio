import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Terminal, MessageCircle, Database } from "lucide-react"

export function KaiynWorkflowPreview() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 lg:p-8">
      {/* 3-Layer Architecture */}
      <div className="flex w-full max-w-lg flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Layer 1: Signal Payload */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="border-border/50 bg-background/50 flex w-full flex-col items-start gap-2 rounded-lg border p-3 shadow-sm transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-blue-400" />
              <span className="font-mono text-xs font-semibold text-blue-400">
                Signal Ingress
              </span>
            </div>
            <div className="w-full space-y-1.5">
              <div className="bg-muted/50 h-2 w-3/4 rounded-full" />
              <div className="bg-muted/50 h-2 w-1/2 rounded-full" />
            </div>
          </div>
        </div>

        <ArrowRight className="text-muted-foreground/30 hidden h-5 w-5 shrink-0 sm:block" />

        {/* Layer 2: Confirmation UI */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="border-border/50 bg-background/50 flex w-full flex-col items-start gap-2 rounded-lg border p-3 shadow-sm transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-amber-400" />
              <span className="font-mono text-xs font-semibold text-amber-400">
                Telegram Auth
              </span>
            </div>
            <div className="bg-muted/30 flex w-full flex-col gap-1.5 rounded p-2">
              <span className="text-muted-foreground text-[10px]">
                Confirm Execution?
              </span>
              <div className="flex gap-1.5">
                <div className="flex h-4 flex-1 items-center justify-center rounded bg-green-500/20 text-[9px] font-medium text-green-400">
                  YES
                </div>
                <div className="flex h-4 flex-1 items-center justify-center rounded bg-red-500/20 text-[9px] font-medium text-red-400">
                  NO
                </div>
              </div>
            </div>
          </div>
        </div>

        <ArrowRight className="text-muted-foreground/30 hidden h-5 w-5 shrink-0 sm:block" />

        {/* Layer 3: Backend State */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="border-border/50 bg-background/50 flex w-full flex-col items-start gap-2 rounded-lg border p-3 shadow-sm transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-green-400" />
              <span className="font-mono text-xs font-semibold text-green-400">
                Audit State
              </span>
            </div>
            <div className="w-full space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[10px]">
                  Status
                </span>
                <span className="text-[10px] font-medium text-green-400">
                  Filled
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[10px]">
                  Latency
                </span>
                <span className="text-[10px] font-medium">42ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech/Risk Chips */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {[
          "1R Risk Check",
          "Encrypted API",
          "PostgreSQL",
          "Docker",
          "CI/CD",
        ].map((chip) => (
          <Badge
            key={chip}
            variant="secondary"
            className="bg-muted/30 text-muted-foreground border-border/50 text-[10px] font-medium"
          >
            {chip}
          </Badge>
        ))}
      </div>
    </div>
  )
}
