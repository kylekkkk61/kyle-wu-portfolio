import * as React from "react"
import { Project } from "@/data/projects"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ExternalLink, Play } from "lucide-react"
import { IconBrandGithub } from "@tabler/icons-react"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group border-border/50 bg-card/50 hover:border-primary/20 overflow-hidden transition-colors">
      <div className="flex flex-col lg:flex-row">
        {/* Visual / Screenshot Area */}
        <div className="bg-muted/30 relative flex min-h-[240px] w-full shrink-0 items-center justify-center p-6 lg:w-[40%] xl:w-[45%]">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="border-border/50 rounded-md border shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="border-border/50 bg-background/50 flex h-full w-full items-center justify-center rounded-md border border-dashed">
              <span className="text-muted-foreground text-sm">
                Screenshot / Demo Area
              </span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <CardContent className="flex flex-col justify-between gap-6 p-6 lg:p-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground text-sm">
                  {project.year}
                </span>
                {project.status && (
                  <>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground text-sm">
                      {project.status}
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="text-foreground/80 text-base">{project.subtitle}</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            <ul className="text-muted-foreground space-y-2 text-sm">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-primary/70 mt-0.5">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links Area */}
          <div className="border-border/30 mt-4 flex flex-wrap items-center gap-3 border-t pt-4">
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
                      size: "sm",
                    }),
                    isPrimary &&
                      "bg-primary text-primary-foreground hover:bg-primary/90",
                  )}
                >
                  {link.type === "github" && (
                    <IconBrandGithub className="mr-2 h-4 w-4" />
                  )}
                  {link.type === "video" && <Play className="mr-2 h-4 w-4" />}
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
        </CardContent>
      </div>
    </Card>
  )
}
