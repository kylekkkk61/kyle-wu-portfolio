"use client"

import * as React from "react"
import { motion, useReducedMotion } from "motion/react"
import { projects } from "@/data/projects"
import { SectionContainer } from "@/components/layout/section-container"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const reduce = useReducedMotion()

  return (
    <SectionContainer id="projects" className="bg-muted/10">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Selected Projects
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[65ch] text-lg">
          Recent work focusing on execution workflows and market structure
          analysis.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects
          .filter((p) => p.featured)
          .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
          .map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
      </div>
    </SectionContainer>
  )
}
