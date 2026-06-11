import * as React from "react"
import { profile } from "@/data/profile"
import { links } from "@/data/links"
import { SectionContainer } from "@/components/layout/section-container"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"

export function AboutSection() {
  return (
    <SectionContainer id="about" variant="plum">

      <div className="relative z-10 grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12 lg:gap-16">
        <div className="md:col-span-5 lg:col-span-4">
          <h2 className="font-heading sticky top-24 text-3xl font-semibold tracking-tight md:text-4xl">
            Background
          </h2>
        </div>

        <div className="space-y-6 md:col-span-7 lg:col-span-8">
          <FadeIn className="rounded-[2rem] border-2 border-white/20 bg-white/[0.02] p-2 shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] p-8 md:p-10">
              <div className="prose prose-zinc dark:prose-invert text-muted-foreground max-w-none">
                {profile.about.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  href={links.resume}
                  className="group inline-flex items-center justify-center rounded-lg bg-white/[0.04] border border-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30"
                >
                  See my resume
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionContainer>
  )
}
