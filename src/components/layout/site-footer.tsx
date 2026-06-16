import { SiGithub } from "@icons-pack/react-simple-icons"
import { IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import { links } from "@/data/links"
import type { Profile } from "@/data/profile"

export function SiteFooter({ profile }: { profile: Profile }) {
  const t = useTranslations("Footer")
  return (
    <footer className="bg-background border-border/40 text-muted-foreground relative z-50 border-t py-8 text-sm">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
          <div className="max-w-md text-center md:text-left">
            <p>
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
              {profile.name}. {t("AllRightsReserved")}
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
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedinFilled className="h-5 w-5" />
            </a>
            <a
              href={links.email}
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <IconMailFilled className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
