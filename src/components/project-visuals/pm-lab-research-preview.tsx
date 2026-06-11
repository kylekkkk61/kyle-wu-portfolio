import * as React from "react"
import { Badge } from "@/components/ui/badge"

export function PmLabResearchPreview() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-6 lg:p-8">
      {/* Mini Dashboard Frame */}
      <div className="relative z-10 flex w-full max-w-lg flex-col gap-4 rounded-xl border border-white/[0.06] bg-white/[0.01] p-4 shadow-xl backdrop-blur-sm">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#8da3b5] shadow-[0_0_8px_rgba(141,163,181,0.5)]" />
            <span className="text-muted-foreground font-mono text-xs font-medium tracking-wider uppercase">
              Execution Lab
            </span>
          </div>
          <Badge
            variant="outline"
            className="border-[#8da3b5]/30 bg-[#8da3b5]/15 text-[10px] text-[#8da3b5]"
          >
            Active Analysis
          </Badge>
        </div>

        {/* Funnel Layout */}
        <div className="grid grid-cols-3 gap-3">
          {/* Column 1: Theoretical */}
          <div className="flex flex-col gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">
            <span className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
              Theoretical Edge
            </span>
            <div className="flex h-16 items-end gap-1 pt-2">
              <div className="h-[90%] w-full rounded-t-sm bg-[#8da3b5]/40 transition-all hover:bg-[#8da3b5]/60" />
            </div>
            <div className="text-foreground/80 mt-1 text-center font-mono text-[10px]">
              100%
            </div>
          </div>

          {/* Column 2: Frictions */}
          <div className="flex flex-col gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">
            <span className="text-muted-foreground text-[10px] font-medium tracking-wide uppercase">
              Frictions
            </span>
            <div className="flex h-16 items-end gap-1 pt-2">
              <div className="h-[65%] w-full rounded-t-sm bg-[#c4a56c]/40 transition-all hover:bg-[#c4a56c]/60" />
            </div>
            <div className="text-foreground/80 mt-1 text-center font-mono text-[10px]">
              65%
            </div>
          </div>

          {/* Column 3: Executable */}
          <div className="relative flex flex-col gap-2 overflow-hidden rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">
            <span className="text-muted-foreground z-10 text-[10px] font-medium tracking-wide uppercase">
              Executable
            </span>
            <div className="z-10 flex h-16 items-end gap-1 pt-2">
              <div className="h-[42%] w-full rounded-t-sm bg-[#9fb396]/60 transition-all hover:bg-[#9fb396]/80" />
            </div>
            <div className="z-10 mt-1 text-center font-mono text-[10px] font-semibold text-[#9fb396]">
              42%
            </div>
            {/* Abstract gradient for edge */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#9fb396]/30 to-transparent" />
          </div>
        </div>

        {/* Bottom Abstract Chart curve */}
        <div className="mt-2 flex h-8 w-full items-center justify-between border-t border-dashed border-white/10 pt-4 opacity-50">
          <svg
            className="text-primary/40 h-4 w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 10"
          >
            <path
              d="M0,10 Q25,2 50,8 T100,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
