import * as React from "react"
import { Filter, Activity, PieChart, TrendingDown } from "lucide-react"

export function PmLabFunnelArtifact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex items-center gap-2 text-sky-300">
          <Filter className="h-5 w-5" />
          <span className="font-mono text-sm font-semibold">
            Edge Degradation Funnel
          </span>
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-muted-foreground">Theoretical Signal</span>
              <span className="text-sky-300">100%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-sky-400/20">
              <div className="h-full w-full bg-sky-400" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-muted-foreground">
                Post-Spread Frictions
              </span>
              <span className="text-yellow-200">65%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-yellow-400/20">
              <div className="h-full w-[65%] bg-yellow-400" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-muted-foreground">Executable Reality</span>
              <span className="text-emerald-300">42%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-emerald-400/20">
              <div className="h-full w-[42%] bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PmLabCalibrationArtifact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-4">
        <div className="flex items-center justify-between text-yellow-200">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            <span className="font-mono text-sm font-semibold">
              Calibration Sim
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted/30 border-border/50 flex flex-col items-center justify-center gap-1 rounded-lg border p-3">
            <span className="text-muted-foreground font-mono text-[10px]">
              Kelly Fraction
            </span>
            <span className="text-sm font-bold">0.15</span>
          </div>
          <div className="bg-muted/30 border-border/50 flex flex-col items-center justify-center gap-1 rounded-lg border p-3">
            <span className="text-muted-foreground font-mono text-[10px]">
              Brier Score
            </span>
            <span className="text-sm font-bold text-emerald-300">0.142</span>
          </div>
          <div className="bg-muted/30 border-border/50 col-span-2 flex flex-col items-center justify-center gap-1 rounded-lg border p-3">
            <span className="text-muted-foreground font-mono text-[10px]">
              Implied vs Realized
            </span>
            <div className="relative mt-1 flex h-8 w-full items-center justify-center">
              {/* Abstract curve */}
              <svg
                className="h-full w-full text-sky-400/50"
                preserveAspectRatio="none"
                viewBox="0 0 100 20"
              >
                <path
                  d="M0,20 Q50,0 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <svg
                className="absolute top-0 left-0 h-full w-full text-yellow-400/50"
                preserveAspectRatio="none"
                viewBox="0 0 100 20"
              >
                <path
                  d="M0,20 Q40,5 100,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PmLabDashboardArtifact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <div className="flex items-center gap-2 text-fuchsia-300">
          <PieChart className="h-5 w-5" />
          <span className="font-mono text-sm font-semibold">
            Research Abstract
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-card border-border/50 flex items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-sky-400" />
              <span className="text-muted-foreground text-xs font-medium">
                Liquidity Depth
              </span>
            </div>
            <span className="font-mono text-xs font-semibold">$42.5k</span>
          </div>
          <div className="bg-card border-border/50 flex items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="text-muted-foreground text-xs font-medium">
                Slippage Est.
              </span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-rose-400" />
              <span className="font-mono text-xs font-semibold text-rose-400">
                -1.2%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
