import * as React from "react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"
import { cn } from "@/lib/utils"

export function CapabilitiesSection() {
  return (
    <SectionContainer id="capabilities" variant="teal">
      <div className="relative z-10 mb-12 md:mb-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          Capabilities
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[65ch] text-lg">
          The technical and domain-specific skills I use to build systems and
          conduct research.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {profile.capabilities.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 100}
            className="group py-6 md:py-8"
          >
            <div className="flex items-start gap-4">
              <span
                className="text-primary/40 font-mono text-xl font-medium tracking-tight select-none"
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
      
      {/* Subtle bottom divider like Image 1 */}
      <div className="mt-8 border-b border-white/[0.06] w-full" />
    </SectionContainer>
  )
}
