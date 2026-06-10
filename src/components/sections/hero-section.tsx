"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <SectionContainer className="flex min-h-[90dvh] items-center pt-20 pb-16 md:pt-24 lg:pt-32">
      <div className="max-w-3xl space-y-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-foreground text-4xl leading-[1.1] font-semibold tracking-tighter md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <div className="text-primary text-xl font-medium tracking-tight md:text-2xl">
            {profile.positioning}
          </div>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-muted-foreground max-w-[65ch] text-lg leading-relaxed md:text-xl"
        >
          {profile.heroDescription}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <a
            href="#work"
            className={cn(buttonVariants({ size: "lg" }), "font-medium")}
          >
            View Work
          </a>
          <a
            href="#about"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "font-medium",
            )}
          >
            About Kyle
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "font-medium",
            )}
          >
            Contact
          </a>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
