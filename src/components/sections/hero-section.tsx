import * as React from "react"
import { profile } from "@/data/profile"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CurrentFocusCard } from "@/components/hero/current-focus-card"

export function HeroSection() {
  return (
    <SectionContainer className="relative flex min-h-[90dvh] flex-col justify-center overflow-hidden py-12 md:py-20">
        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-2xl space-y-8">
            <div className="animate-fade-up space-y-4">
              <span className="bg-primary/20 text-primary inline-block rounded-md px-3 py-1 text-sm font-medium">
                Personal Portfolio
              </span>
              <h1 className="font-heading text-foreground text-4xl leading-[1.1] font-semibold tracking-tighter md:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <div className="text-primary/90 text-xl font-medium tracking-tight md:text-2xl">
                {profile.positioning}
              </div>
            </div>

            <p
              className="text-muted-foreground animate-fade-up text-lg leading-relaxed md:text-xl"
              style={{ animationDelay: "100ms" }}
            >
              {profile.heroDescription}
            </p>

            <div
              className="animate-fade-up flex flex-col items-center gap-4 pt-4 sm:flex-row"
              style={{ animationDelay: "200ms" }}
            >
              <a
                href="#work"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full px-8 text-base font-medium sm:w-auto",
                )}
              >
                View Work
              </a>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 w-full px-8 text-base font-medium sm:w-auto",
                )}
              >
                Contact
              </a>
            </div>
          </div>

          <div
            className="animate-fade-up w-full lg:justify-self-end"
            style={{ animationDelay: "300ms" }}
          >
            <CurrentFocusCard />
          </div>
        </div>
    </SectionContainer>
  )
}

