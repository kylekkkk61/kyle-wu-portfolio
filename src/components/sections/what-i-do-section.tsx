import * as React from "react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"

export function WhatIDoSection() {
  return (
    <SectionContainer id="what-i-do" className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl space-y-12 text-center md:text-left">
        <FadeIn className="space-y-4">
          <h2 className="text-primary font-mono text-sm tracking-widest uppercase">
            {profile.whatIDo.eyebrow}
          </h2>
          <p className="text-foreground text-3xl leading-tight font-medium tracking-tight md:text-4xl">
            {profile.whatIDo.title}
          </p>
        </FadeIn>

        <FadeIn
          delay={100}
          className="text-muted-foreground space-y-6 text-lg leading-relaxed"
        >
          {profile.whatIDo.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </FadeIn>
      </div>
    </SectionContainer>
  )
}
