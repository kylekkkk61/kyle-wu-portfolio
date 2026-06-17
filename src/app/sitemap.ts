import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { routing } from "@/i18n/routing"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kylewu.me"

  const getUrl = (locale: string, path = "") => {
    // Under localePrefix: "as-needed", default locale 'en' has no prefix
    const prefix = locale === "en" ? "" : `/${locale}`
    return `${baseUrl}${prefix}${path}`
  }

  // Home pages
  const homePages = routing.locales.map((locale) => ({
    url: getUrl(locale),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }))

  // Project pages
  const projectPages = routing.locales.flatMap((locale) =>
    projects.map((p) => ({
      url: getUrl(locale, `/projects/${p.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  )

  // Resume pages
  const resumePages = routing.locales.map((locale) => ({
    url: getUrl(locale, "/resume"),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...homePages, ...projectPages, ...resumePages]
}
