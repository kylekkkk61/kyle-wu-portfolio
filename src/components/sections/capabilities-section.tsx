"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"

export function CapabilitiesSection() {
  const reduce = useReducedMotion()

  return (
    <SectionContainer id="capabilities" className="py-24 md:py-32">
      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Capabilities
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
        {profile.capabilities.map((item, index) => (
          <motion.div
            key={item.title}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group space-y-4"
          >
            <div className="flex items-start gap-4">
              <span
                className="text-muted-foreground/30 font-mono text-xl font-medium tracking-tight select-none"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-3 pt-0.5">
                <h3 className="text-foreground text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
