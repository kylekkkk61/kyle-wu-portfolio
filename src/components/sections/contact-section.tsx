"use client"

import { IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react"
import { ArrowUpRight, Check, Copy } from "lucide-react"
import { useTranslations } from "next-intl"
import * as React from "react"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { links } from "@/data/links"
import { cn, surfaceClass } from "@/lib/utils"

export function ContactSection() {
  const [copied, setCopied] = React.useState(false)
  const t = useTranslations("Contact")

  const handleCopyEmail = async () => {
    const email = links.email.replace("mailto:", "")
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
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
            {t("LetsTalk")}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            {t("Description")}
          </p>
        </div>

        <div className="relative z-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href={links.email}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-full px-8 text-base sm:w-auto",
            )}
          >
            <IconMailFilled className="mr-2 h-5 w-5" />
            {t("EmailMe")}
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-12 w-full cursor-pointer px-8 text-base sm:w-auto",
            )}
          >
            {copied ? (
              <>
                <Check className="mr-2 h-5 w-5" />
                <span aria-live="polite">{t("Copied")}</span>
              </>
            ) : (
              <>
                <Copy className="mr-2 h-5 w-5" />
                {t("CopyEmail")}
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
