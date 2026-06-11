"use client"

import * as React from "react"
import { links } from "@/data/links"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { cn, surfaceClass } from "@/lib/utils"
import { ArrowUpRight, Check } from "lucide-react"
import { IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react"
import { FadeIn } from "@/components/ui/fade-in"

export function ContactSection() {
  const [copied, setCopied] = React.useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    // Extract email from mailto: link
    const email = links.email.replace("mailto:", "")
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <SectionContainer id="contact">

      <FadeIn
        className={cn(
          surfaceClass,
          "relative mx-auto flex max-w-4xl flex-col items-center space-y-8 overflow-hidden p-12 text-center md:p-20",
        )}
      >
        <div className="relative z-10 space-y-4">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Let&apos;s Talk
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Open to conversations around fintech projects, crypto trading
            infrastructure, data-driven product work, market-structure research,
            and business-to-system implementation.
          </p>
        </div>

        <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <button
            onClick={handleCopyEmail}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full cursor-pointer px-8 text-base sm:w-auto",
            )}
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                Copied!
              </>
            ) : (
              <>
                <IconMailFilled className="mr-2 h-5 w-5" />
                Email Me
              </>
            )}
          </button>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 w-full px-8 text-base sm:w-auto",
            )}
          >
            <IconBrandLinkedinFilled className="mr-2 h-5 w-5" />
            LinkedIn
            <ArrowUpRight className="ml-2 h-5 w-5 opacity-70" />
          </a>
        </div>
      </FadeIn>
    </SectionContainer>
  )
}
