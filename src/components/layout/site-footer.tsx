import { links } from "@/data/links"
import { profile } from "@/data/profile"
import { Mail } from "lucide-react"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

export function SiteFooter() {
  return (
    <footer className="border-border/40 text-muted-foreground border-t py-8 text-sm">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
          <div className="max-w-md text-center md:text-left">
            <p>
              © {new Date().getFullYear()} {profile.name}. Built as a personal
              portfolio for fintech, trading infrastructure, and applied
              research projects.
            </p>
            <p className="mt-2 text-xs opacity-75">
              Projects shown here are for engineering, research, and portfolio
              demonstration purposes. Nothing on this site should be interpreted
              as financial advice or a claim of trading profitability.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <IconBrandGithub className="h-5 w-5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </a>
            <a
              href={links.email}
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
