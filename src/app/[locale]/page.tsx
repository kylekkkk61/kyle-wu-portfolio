import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { WhatIDoSection } from "@/components/sections/what-i-do-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { SiteTrack } from "@/components/layout/site-track"

const SectionDivider = () => (
  <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
)

import { getProfile } from "@/data/profile"
import { getProjects } from "@/data/projects"
import { setRequestLocale } from "next-intl/server"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const profile = getProfile(locale)
  const projectsData = getProjects(locale)

  return (
    <>
      <SiteHeader profile={profile} />
      <main className="relative flex-1">
        <SiteTrack />
        <HeroSection profile={profile} />
        <SectionDivider />
        <WhatIDoSection profile={profile} />
        <SectionDivider />
        <ProjectsSection projects={projectsData} />
        <SectionDivider />
        <CapabilitiesSection profile={profile} />
        <SectionDivider />
        <AboutSection profile={profile} />
        <SectionDivider />
        <ContactSection />
      </main>
      <SiteFooter profile={profile} />
    </>
  )
}
