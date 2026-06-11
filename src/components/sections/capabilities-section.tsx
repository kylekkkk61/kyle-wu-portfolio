import * as React from "react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"
import { cn, surfaceClass } from "@/lib/utils"

export function CapabilitiesSection() {
  return (
    <SectionContainer id="capabilities" className="relative py-20 md:py-32">
      <div className="relative z-10 mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
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
            className={cn(surfaceClass, "group p-6 md:p-8")}
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
    </SectionContainer>
  )
}
