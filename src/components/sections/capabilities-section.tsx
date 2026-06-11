"use client"

import * as React from "react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"

export function CapabilitiesSection() {
  return (
    <SectionContainer id="capabilities" className="py-20 md:py-32">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Capabilities
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[65ch] text-lg">
          The technical and domain-specific skills I use to build systems and
          conduct research.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
        {profile.capabilities.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 100}
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
          </FadeIn>
        ))}
      </div>
    </SectionContainer>
  )
}
