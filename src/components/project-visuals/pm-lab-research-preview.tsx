import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Filter, BarChart3, Target } from "lucide-react"

export function PmLabResearchPreview() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-sm">
      <div className="flex w-full max-w-sm flex-col gap-3">
        {/* Step 1 */}
        <div className="border-border/50 bg-background/50 flex items-center gap-3 rounded-md border p-3 shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-blue-500/10 text-blue-400">
            <Target className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Theoretical Edge</span>
            <span className="text-muted-foreground text-xs">
              Initial pricing signal
            </span>
          </div>
        </div>

        {/* Step 2 */}
        <div className="border-border/50 bg-background/50 flex items-center gap-3 rounded-md border p-3 shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-amber-500/10 text-amber-400">
            <Filter className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Execution Frictions</span>
            <span className="text-muted-foreground text-xs">
              Spread, latency, liquidity
            </span>
          </div>
        </div>

        {/* Step 3 */}
        <div className="border-border/50 bg-background/50 flex items-center gap-3 rounded-md border p-3 shadow-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-green-500/10 text-green-400">
            <BarChart3 className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-medium">Executable Edge</span>
            <span className="text-muted-foreground text-xs">
              Realized probability
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Badge variant="secondary" className="bg-muted/50 text-xs font-normal">
          Calibration
        </Badge>
        <Badge variant="secondary" className="bg-muted/50 text-xs font-normal">
          Execution Funnel
        </Badge>
        <Badge variant="secondary" className="bg-muted/50 text-xs font-normal">
          Risk Simulation
        </Badge>
      </div>
    </div>
  )
}
