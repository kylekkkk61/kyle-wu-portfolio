import * as React from "react"
import { profile } from "@/data/profile"
import { links } from "@/data/links"
import { SectionContainer } from "@/components/layout/section-container"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FileText } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="md:col-span-5 lg:col-span-4">
          <h2 className="sticky top-24 text-3xl font-semibold tracking-tight md:text-4xl">
            Background
          </h2>
        </div>

        <div className="space-y-6 md:col-span-7 lg:col-span-8">
          <FadeIn className="prose prose-zinc dark:prose-invert text-muted-foreground max-w-none">
            {profile.about.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={100} className="pt-4">
            <Link
              href={links.resume}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group",
              )}
            >
              <FileText className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              See my resume
            </Link>
          </FadeIn>
        </div>
      </div>
    </SectionContainer>
  )
}
