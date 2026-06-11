"use client"

import * as React from "react"
import { surfaceClass } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

export function PortfolioPreviewCard() {
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

      <div className="relative z-10 flex flex-col gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-mono text-[10px] font-medium tracking-widest text-emerald-400 uppercase">
              System Active
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">
            Portfolio Architecture
          </h3>
          <p className="text-muted-foreground text-sm">
            Market questions → structured execution systems
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="group rounded-xl border border-white/5 bg-white/[0.01] p-4 transition-colors hover:bg-white/[0.03]">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Kaiyn Trading Bot</span>
              <span className="text-muted-foreground rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                Infra
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="bg-primary/60 h-full rounded-full"
              />
            </div>
          </div>

          <div className="group rounded-xl border border-white/5 bg-white/[0.01] p-4 transition-colors hover:bg-white/[0.03]">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">PM Execution Lab</span>
              <span className="text-muted-foreground rounded-full bg-white/5 px-2 py-0.5 font-mono text-[10px] tracking-widest uppercase">
                Research
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                className="bg-primary/60 h-full rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
          {["Business-to-System", "Data Analysis", "Trading Workflows"].map(
            (chip) => (
              <span
                key={chip}
                className="border-primary/20 bg-primary/10 text-primary-foreground/90 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide uppercase"
              >
                {chip}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
