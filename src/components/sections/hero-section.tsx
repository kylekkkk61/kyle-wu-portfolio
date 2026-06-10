import * as React from "react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <SectionContainer className="relative flex min-h-[72dvh] flex-col justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-3xl space-y-8">
        <div className="animate-fade-up space-y-4">
          <h1 className="text-foreground text-4xl leading-[1.1] font-semibold tracking-tighter md:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <div className="text-primary text-xl font-medium tracking-tight md:text-2xl">
            {profile.positioning}
          </div>
        </div>

        <p
          className="text-muted-foreground animate-fade-up max-w-[65ch] text-lg leading-relaxed md:text-xl"
          style={{ animationDelay: "100ms" }}
        >
          {profile.heroDescription}
        </p>

        <div
          className="animate-fade-up flex flex-wrap items-center gap-4 pt-4"
          style={{ animationDelay: "200ms" }}
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
        </div>
      </div>
    </SectionContainer>
  )
}
