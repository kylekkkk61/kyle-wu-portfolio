"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"

export function WhatIDoSection() {
  const reduce = useReducedMotion()

  return (
    <SectionContainer id="what-i-do" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl space-y-12 text-center md:text-left">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase">
            {profile.whatIDo.eyebrow}
          </h2>
          <p className="text-foreground text-3xl leading-tight font-medium tracking-tight md:text-4xl">
            {profile.whatIDo.title}
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-muted-foreground space-y-6 text-lg leading-relaxed"
        >
          {profile.whatIDo.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  )
}
