import * as React from "react"
import { Badge } from "@/components/ui/badge"

export function PmLabResearchPreview() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 lg:p-8">
      {/* Mini Dashboard Frame */}
      <div className="border-border/50 bg-background/50 flex w-full max-w-lg flex-col gap-4 rounded-xl border p-4 shadow-sm">
        {/* Header */}
        <div className="border-border/50 flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-muted-foreground font-mono text-xs font-medium tracking-wider uppercase">
              Execution Lab
            </span>
          </div>
          <Badge
            variant="outline"
            className="border-blue-500/20 bg-blue-500/10 text-[10px] text-blue-400"
          >
            Active Analysis
          </Badge>
        </div>

        {/* Funnel Layout */}
        <div className="grid grid-cols-3 gap-3">
          {/* Column 1: Theoretical */}
          <div className="bg-muted/20 border-border/30 flex flex-col gap-2 rounded border p-2">
            <span className="text-muted-foreground text-[10px] font-medium">
              Theoretical Edge
            </span>
            <div className="flex h-16 items-end gap-1 pt-2">
              <div className="h-[90%] w-full rounded-t bg-blue-500/20 transition-all hover:bg-blue-500/40" />
            </div>
            <div className="text-foreground mt-1 text-center font-mono text-[10px]">
              100%
            </div>
          </div>

          {/* Column 2: Frictions */}
          <div className="bg-muted/20 border-border/30 flex flex-col gap-2 rounded border p-2">
            <span className="text-muted-foreground text-[10px] font-medium">
              Frictions
            </span>
            <div className="flex h-16 items-end gap-1 pt-2">
              <div className="h-[65%] w-full rounded-t bg-amber-500/20 transition-all hover:bg-amber-500/40" />
            </div>
            <div className="text-foreground mt-1 text-center font-mono text-[10px]">
              65%
            </div>
          </div>

          {/* Column 3: Executable */}
          <div className="bg-muted/20 border-border/30 relative flex flex-col gap-2 overflow-hidden rounded border p-2">
            <span className="text-muted-foreground z-10 text-[10px] font-medium">
              Executable
            </span>
            <div className="z-10 flex h-16 items-end gap-1 pt-2">
              <div className="h-[42%] w-full rounded-t bg-green-500/40 transition-all hover:bg-green-500/60" />
            </div>
            <div className="z-10 mt-1 text-center font-mono text-[10px] font-semibold text-green-400">
              42%
            </div>
            {/* Abstract gradient for edge */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-green-500/10 to-transparent" />
          </div>
        </div>

        {/* Bottom Abstract Chart curve */}
        <div className="border-border/50 mt-2 flex h-8 w-full items-center justify-between border-t border-dashed pt-2 opacity-70">
          <svg
            className="text-muted-foreground/30 h-4 w-full"
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
