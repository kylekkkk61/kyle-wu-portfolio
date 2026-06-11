import * as React from "react"
import { links } from "@/data/links"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Mail, ArrowUpRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="py-24 md:py-32">
      <FadeIn className="mx-auto flex max-w-2xl flex-col items-center space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Let&apos;s Talk
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl">
            Open to conversations around fintech projects, crypto trading
            infrastructure, data-driven product work, market-structure research,
            and business-to-system implementation.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href={links.email}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full px-8 text-base sm:w-auto",
            )}
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 w-full px-8 text-base sm:w-auto",
            )}
          >
            LinkedIn
            <ArrowUpRight className="ml-2 h-5 w-5 opacity-70" />
          </a>
        </div>
      </FadeIn>
    </SectionContainer>
  )
}
