import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { HeroSection } from "@/components/sections/hero-section"
import { WhatIDoSection } from "@/components/sections/what-i-do-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WhatIDoSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
