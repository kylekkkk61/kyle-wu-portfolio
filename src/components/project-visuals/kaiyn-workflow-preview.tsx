import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Terminal, MessageCircle, Database } from "lucide-react"

export function KaiynWorkflowPreview() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-6 lg:p-8">
      {/* 3-Layer Architecture */}
      <div className="relative z-10 flex w-full max-w-lg flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Layer 1: Signal Payload */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="group relative w-full rounded-xl border border-white/10 bg-white/[0.01] p-4 shadow-sm backdrop-blur transition-all hover:bg-white/[0.03]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
            <div className="mb-3 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-blue-400" />
              <span className="font-mono text-xs font-semibold text-blue-400">
                Signal Ingress
              </span>
            </div>
            <div className="w-full space-y-2">
              <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        <ArrowRight className="hidden h-5 w-5 shrink-0 text-white/20 sm:block" />

        {/* Layer 2: Confirmation UI */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="group relative w-full rounded-xl border border-white/10 bg-white/[0.01] p-4 shadow-sm backdrop-blur transition-all hover:bg-white/[0.03]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
            <div className="mb-3 flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-amber-400" />
              <span className="font-mono text-xs font-semibold text-amber-400">
                Telegram Auth
              </span>
            </div>
            <div className="flex w-full flex-col gap-2 rounded border border-white/5 bg-white/[0.02] p-2">
              <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
                Confirm Execute
              </span>
              <div className="flex gap-1.5">
                <div className="flex h-5 flex-1 items-center justify-center rounded border border-green-500/20 bg-green-500/10 text-[9px] font-medium text-green-400">
                  YES
                </div>
                <div className="flex h-5 flex-1 items-center justify-center rounded border border-red-500/20 bg-red-500/10 text-[9px] font-medium text-red-400">
                  NO
                </div>
              </div>
            </div>
          </div>
        </div>

        <ArrowRight className="hidden h-5 w-5 shrink-0 text-white/20 sm:block" />

        {/* Layer 3: Backend State */}
        <div className="flex flex-1 flex-col items-center gap-3">
          <div className="group relative w-full rounded-xl border border-white/10 bg-white/[0.01] p-4 shadow-sm backdrop-blur transition-all hover:bg-white/[0.03]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
            <div className="mb-3 flex items-center gap-2">
              <Database className="h-4 w-4 text-green-400" />
              <span className="font-mono text-xs font-semibold text-green-400">
                Audit State
              </span>
            </div>
            <div className="w-full space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
                  Status
                </span>
                <span className="rounded bg-green-500/10 px-1.5 py-0.5 text-[10px] font-medium text-green-400">
                  Filled
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-[10px] tracking-wider uppercase">
                  Latency
                </span>
                <span className="text-foreground/80 font-mono text-[10px]">
                  42ms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech/Risk Chips */}
      <div className="relative z-10 mt-8 flex flex-wrap justify-center gap-2">
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
            className="text-foreground/70 rounded-full border-white/10 bg-white/[0.02] px-2.5 py-0.5 text-[10px] font-medium hover:bg-white/[0.05]"
          >
            {chip}
          </Badge>
        ))}
      </div>
    </div>
  )
}
