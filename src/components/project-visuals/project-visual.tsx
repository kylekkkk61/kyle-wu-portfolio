import type { ProjectVisualType } from "@/data/projects"
import { DefaultProjectPreview } from "./default-project-preview"
import { KaiynWorkflowPreview } from "./kaiyn-workflow-preview"
import { PmLabResearchPreview } from "./pm-lab-research-preview"

export function ProjectVisual({ type }: { type: ProjectVisualType }) {
  switch (type) {
    case "kaiyn-workflow":
      return <KaiynWorkflowPreview />
    case "pm-lab-research":
      return <PmLabResearchPreview />
    default:
      return <DefaultProjectPreview />
  }
}
