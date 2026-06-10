import * as React from "react"
import { ProjectVisualType } from "@/data/projects"
import { KaiynWorkflowPreview } from "./kaiyn-workflow-preview"
import { PmLabResearchPreview } from "./pm-lab-research-preview"
import { DefaultProjectPreview } from "./default-project-preview"

export function ProjectVisual({ type }: { type: ProjectVisualType }) {
  switch (type) {
    case "kaiyn-workflow":
      return <KaiynWorkflowPreview />
    case "pm-lab-research":
      return <PmLabResearchPreview />
    case "default":
    default:
      return <DefaultProjectPreview />
  }
}
