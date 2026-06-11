"use client"

import * as React from "react"
import { profile } from "@/data/profile"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/#work", label: "Work" },
    { href: "/#capabilities", label: "Capabilities" },
    { href: "/#about", label: "About" },
  ]

  return (
    <header className="bg-background/70 sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2 font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xl tracking-tight">{profile.name}</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="text-muted-foreground hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="relative z-50 flex items-center gap-4">
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(buttonVariants({ size: "sm" }))}
          >
            Contact
          </Link>
          <button
            className="text-muted-foreground hover:text-foreground -mr-2 p-2 transition-colors md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="bg-background border-border/40 animate-fade-up absolute top-16 left-0 w-full border-b shadow-lg md:hidden">
          <nav className="flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary text-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
