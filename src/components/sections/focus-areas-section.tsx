"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { Card, CardContent } from "@/components/ui/card"

export function FocusAreasSection() {
  const reduce = useReducedMotion()

  return (
    <SectionContainer
      id="focus-areas"
      className="bg-muted/10 border-border/50 border-y"
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Focus Areas
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {profile.focusAreas.map((area, idx) => (
          <motion.div
            key={area.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Card className="border-border/50 bg-background/50 hover:border-primary/30 h-full transition-colors">
              <CardContent className="space-y-3 p-6 md:p-8">
                <div className="bg-primary/10 text-primary mb-4 flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
