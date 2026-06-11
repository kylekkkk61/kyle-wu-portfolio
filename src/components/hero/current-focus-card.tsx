"use client"

import * as React from "react"
import { surfaceClass } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import { GraduationCap, Code2, Target, GitBranch, Terminal, LineChart, Network } from "lucide-react"

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
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(91, 69, 137, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-primary/80" />
            <span className="font-mono text-[10px] font-medium tracking-widest text-primary uppercase">
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
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                MSc Financial Technology
              </p>
              <p className="text-sm text-muted-foreground">
                Warwick Business School (Incoming)
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Code2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-2 w-full">
              <p className="text-sm font-medium text-foreground">Building</p>
              <div className="flex flex-col gap-2">
                <div className="group flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors hover:bg-white/[0.04]">
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Kaiyn Trading Bot</span>
                  <Terminal className="h-3.5 w-3.5 text-muted-foreground/50" />
                </div>
                <div className="group flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] px-3 py-2 transition-colors hover:bg-white/[0.04]">
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">PM Execution Lab</span>
                  <LineChart className="h-3.5 w-3.5 text-muted-foreground/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Target className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground">
                  <Network className="h-3 w-3" />
                  Trading Infra
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground">
                  <LineChart className="h-3 w-3" />
                  Data Analysis
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground">
                  <GitBranch className="h-3 w-3" />
                  Market Microstructure
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-muted-foreground">
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
