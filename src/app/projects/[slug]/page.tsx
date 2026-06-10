import { notFound } from "next/navigation"
import { Metadata } from "next"
import { projects } from "@/data/projects"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { SectionContainer } from "@/components/layout/section-container"
import { ProjectVisual } from "@/components/project-visuals/project-visual"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Play } from "lucide-react"
import { IconBrandGithub } from "@tabler/icons-react"
import {
  KaiynSignalArtifact,
  KaiynConfirmationArtifact,
  KaiynAuditArtifact,
} from "@/components/project-artifacts/kaiyn-artifacts"
import {
  PmLabFunnelArtifact,
  PmLabCalibrationArtifact,
  PmLabDashboardArtifact,
} from "@/components/project-artifacts/pm-lab-artifacts"

function ArtifactPreview({ id }: { id: string }) {
  switch (id) {
    case "kaiyn-signal":
      return <KaiynSignalArtifact />
    case "kaiyn-confirmation":
      return <KaiynConfirmationArtifact />
    case "kaiyn-audit":
      return <KaiynAuditArtifact />
    case "pm-lab-funnel":
      return <PmLabFunnelArtifact />
    case "pm-lab-calibration":
      return <PmLabCalibrationArtifact />
    case "pm-lab-dashboard":
      return <PmLabDashboardArtifact />
    default:
      return null
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.shortDescription || project.description,
    openGraph: {
      title: project.title,
      description: project.shortDescription || project.description,
      images: [{ url: "/og/portfolio-og.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription || project.description,
      images: ["/og/portfolio-og.png"],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const slug = (await params).slug
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-12 pb-24 md:pt-16 md:pb-32">
        <SectionContainer>
          {/* Back link */}
          <div className="mb-12">
            <Link
              href="/#work"
              className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Selected Work
            </Link>
          </div>

          <div className="flex flex-col gap-12 lg:gap-20">
            {/* Hero & Visual */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
              <div className="space-y-6 lg:col-span-5">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground text-sm">
                      {project.year}
                    </span>
                  </div>
                  <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground text-xl">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.links.map((link, idx) => {
                    const isPrimary =
                      link.type === "landing-page" ||
                      link.type === "dashboard" ||
                      idx === 0
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          buttonVariants({
                            variant: isPrimary ? "default" : "outline",
                          }),
                          isPrimary &&
                            "bg-primary text-primary-foreground hover:bg-primary/90",
                        )}
                      >
                        {link.type === "github" && (
                          <IconBrandGithub className="mr-2 h-4 w-4" />
                        )}
                        {link.type === "video" && (
                          <Play className="mr-2 h-4 w-4" />
                        )}
                        {(link.type === "external" ||
                          link.type === "case-study" ||
                          link.type === "dashboard" ||
                          link.type === "landing-page") && (
                          <ExternalLink className="mr-2 h-4 w-4" />
                        )}
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="bg-muted/30 border-border/50 relative flex min-h-[300px] w-full items-center justify-center rounded-xl border lg:col-span-7">
                <ProjectVisual type={project.visual} />
              </div>
            </div>

            {/* Content Sections */}
            <div className="mx-auto mt-16 max-w-3xl space-y-16">
              {/* Video Demo */}
              {project.video && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Live Demo
                  </h2>
                  <div className="border-border/50 bg-muted/30 overflow-hidden rounded-xl border shadow-2xl">
                    <video
                      src={project.video}
                      poster={project.videoPoster}
                      controls
                      playsInline
                      preload="none"
                      className="aspect-video w-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </section>
              )}

              {/* Why It Matters */}
              {project.detail.whyItMatters && (
                <section className="bg-primary/5 border-primary/10 space-y-4 rounded-xl border p-6">
                  <h2 className="text-primary text-2xl font-semibold tracking-tight">
                    {project.detail.whyItMatters.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.detail.whyItMatters.body}
                  </p>
                </section>
              )}

              {/* Context */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.detail.context.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.detail.context.body}
                </p>
              </section>

              {/* What I Built */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.detail.whatIBuilt.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.detail.whatIBuilt.body}
                </p>
              </section>

              {/* Workflow / Process */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.detail.process.title}
                </h2>
                <ul className="text-muted-foreground space-y-2 text-lg">
                  {project.detail.process.items?.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary/70 mt-1.5 shrink-0 text-sm">
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Key Highlights (from top level) */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Key Highlights
                </h2>
                <ul className="text-muted-foreground space-y-2 text-lg">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary/70 mt-1.5 shrink-0 text-sm">
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What This Demonstrates */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.detail.demonstrates.title}
                </h2>
                <ul className="text-muted-foreground space-y-2 text-lg">
                  {project.detail.demonstrates.items?.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary/70 mt-1.5 shrink-0 text-sm">
                        ▹
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Representative Artifacts */}
              {project.detail.artifacts && (
                <section className="space-y-8">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {project.detail.artifacts.title}
                  </h2>
                  <div className="grid grid-cols-1 gap-8">
                    {project.detail.artifacts.items.map((artifact) => (
                      <div key={artifact.id} className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-lg font-medium tracking-tight">
                            {artifact.title}
                          </h3>
                          <p className="text-muted-foreground text-base">
                            {artifact.description}
                          </p>
                        </div>
                        <div className="bg-muted/30 border-border/50 relative flex min-h-[250px] w-full items-center justify-center overflow-hidden rounded-xl border">
                          <ArtifactPreview id={artifact.id} />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tech Stack */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.detail.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-sm font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Disclaimer */}
              {project.detail.disclaimer && (
                <section className="border-border/50 border-t pt-8">
                  <p className="text-muted-foreground text-sm italic">
                    {project.detail.disclaimer}
                  </p>
                </section>
              )}
            </div>
          </div>
        </SectionContainer>
      </main>
      <SiteFooter />
    </>
  )
}
