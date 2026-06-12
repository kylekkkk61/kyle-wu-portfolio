"use client"

import * as React from "react"
import { surfaceClass } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import {
  GraduationCap,
  Target,
  Compass,
  GitBranch,
  Terminal,
  LineChart,
  Network,
} from "lucide-react"

export function CurrentFocusCard() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className={cn(
        surfaceClass,
        "group/card relative mx-auto flex w-full max-w-lg flex-col overflow-hidden p-6 sm:p-8 lg:mr-0 lg:ml-auto",
      )}
      onMouseMove={onMouseMove}
    >
      {/* Magnetic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/card:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              rgba(240, 234, 221, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary/80 flex h-2 w-2 rounded-full" />
            <span className="text-primary font-mono text-[10px] font-medium tracking-widest uppercase">
              Current Focus
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">
            Building & Learning
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          {/* Education */}
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <GraduationCap className="text-muted-foreground h-4 w-4" />
            </div>
            <div>
              <p className="text-foreground text-sm font-medium">
                MSc Financial Technology
              </p>
              <p className="text-muted-foreground text-sm">
                Warwick Business School (Incoming)
              </p>
            </div>
          </div>

          {/* Career Interests */}
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Compass className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="w-full space-y-2">
              <p className="text-foreground text-sm font-medium">
                Career Interests
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="group flex h-full items-center justify-start rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors hover:bg-white/[0.04]">
                  <span className="text-muted-foreground group-hover:text-foreground text-left text-xs transition-colors">
                    FinTech Product & Strategy
                  </span>
                </div>
                <div className="group flex h-full items-center justify-start rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors hover:bg-white/[0.04]">
                  <span className="text-muted-foreground group-hover:text-foreground text-left text-xs transition-colors">
                    Trading / Market Operations
                  </span>
                </div>
                <div className="group flex h-full items-center justify-start rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors hover:bg-white/[0.04]">
                  <span className="text-muted-foreground group-hover:text-foreground text-left text-xs transition-colors">
                    Data & Business Analysis
                  </span>
                </div>
                <div className="group flex h-full items-center justify-start rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors hover:bg-white/[0.04]">
                  <span className="text-muted-foreground group-hover:text-foreground text-left text-xs transition-colors">
                    Market Infrastructure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Target className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="space-y-2">
              <p className="text-foreground text-sm font-medium">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-muted-foreground inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs">
                  <Network className="h-3 w-3" />
                  Trading Infra
                </span>
                <span className="text-muted-foreground inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs">
                  <LineChart className="h-3 w-3" />
                  Data Analysis
                </span>
                <span className="text-muted-foreground inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs">
                  <GitBranch className="h-3 w-3" />
                  Market Microstructure
                </span>
                <span className="text-muted-foreground inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs">
                  <Terminal className="h-3 w-3" />
                  Business-to-System
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
