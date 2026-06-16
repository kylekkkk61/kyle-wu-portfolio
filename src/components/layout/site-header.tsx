"use client"

import { Globe, Menu, X } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import type { Profile } from "@/data/profile"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { cn } from "@/lib/utils"

export function SiteHeader({ profile }: { profile: Profile }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const t = useTranslations("Navigation")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

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
    { href: "/#work", label: t("Work") },
    { href: "/#capabilities", label: t("Capabilities") },
    { href: "/#about", label: t("About") },
  ]

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "zh-TW" : "en"
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    // Append hash to pathname so next-intl router routes to the translated anchor
    router.replace(pathname + hash, { locale: nextLocale, scroll: false })
  }

  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2 font-semibold"
            onClick={(e) => {
              setIsMobileMenuOpen(false)
              if (
                (typeof window !== "undefined" &&
                  window.location.pathname === "/") ||
                window.location.pathname === `/${locale}`
              ) {
                // Next-intl link handles prefix, but smooth scroll custom logic
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
                window.history.pushState(null, "", `/${locale}`)
              }
            }}
          >
            <span className="text-xl tracking-tight">{profile.name}</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="text-muted-foreground hidden items-center gap-12 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="relative z-50 flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              locale === "en" ? "Switch to Chinese" : "Switch to English"
            }
            className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium transition-colors"
          >
            <Globe size={16} />
            <span className="hidden sm:inline">
              {locale === "en" ? "中文" : "EN"}
            </span>
          </button>

          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:inline-flex",
            )}
          >
            {t("Contact")}
          </Link>

          <button
            type="button"
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
                className="text-foreground text-lg font-medium transition-colors hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="text-foreground text-lg font-medium transition-colors hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("Contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
