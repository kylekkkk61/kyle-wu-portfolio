import * as React from "react"
import { profile } from "@/data/profile"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="text-xl tracking-tight">{profile.name}</span>
          </a>
        </div>
        <nav className="text-muted-foreground hidden items-center gap-6 text-sm font-medium md:flex">
          <a
            href="#projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a
            href="#focus-areas"
            className="hover:text-foreground transition-colors"
          >
            Focus Areas
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
