import * as React from "react"
import { profile } from "@/data/profile"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl tracking-tight">{profile.name}</span>
          </Link>
        </div>
        <nav className="text-muted-foreground hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/#work"
            className="hover:text-foreground transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#capabilities"
            className="hover:text-foreground transition-colors"
          >
            Capabilities
          </Link>
          <Link
            href="/#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex",
            )}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}
