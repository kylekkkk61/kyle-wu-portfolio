import * as React from "react"
import { projects } from "@/data/projects"
import { SectionContainer } from "@/components/layout/section-container"
import { ProjectCard } from "@/components/project-card"
import { FadeIn } from "@/components/ui/fade-in"

export function ProjectsSection() {
  return (
    <SectionContainer id="work" className="bg-muted/10">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Selected Work
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[65ch] text-lg">
          Public projects that show how I translate trading workflows, market
          questions, and data problems into practical systems and research
          artifacts.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects
          .filter((p) => p.featured)
          .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
          .map((project, idx) => (
            <FadeIn key={project.slug} delay={idx * 100}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
      </div>
    </SectionContainer>
  )
}
