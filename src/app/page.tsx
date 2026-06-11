import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { WhatIDoSection } from "@/components/sections/what-i-do-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"

const SectionDivider = () => (
  <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
)

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SectionDivider />
        <WhatIDoSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <CapabilitiesSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
