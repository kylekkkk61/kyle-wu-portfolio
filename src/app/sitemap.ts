import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"
import { routing } from "@/i18n/routing"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kylewu.me"

  // Home pages
  const homePages = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }))

  // Project pages
  const projectPages = routing.locales.flatMap((locale) =>
    projects.map((p) => ({
      url: `${baseUrl}/${locale}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  )

  // Resume pages
  const resumePages = routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}/resume`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [
    {
      url: baseUrl, // Default redirect
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...homePages,
    ...projectPages,
    ...resumePages,
  ]
}
