import { createOgImage, ogImageSize } from "@/components/seo/og-card"
import { getProjects } from "@/data/projects"

export const alt = "Kyle Wu selected project"
export const size = ogImageSize
export const contentType = "image/png"
export const runtime = "nodejs"

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const project = getProjects(locale).find((item) => item.slug === slug)

  if (!project) {
    return createOgImage({
      eyebrow: locale === "zh-TW" ? "精選專案" : "Selected Project",
      title: "Kyle Wu",
      subtitle: locale === "zh-TW" ? "專案不存在" : "Project not found",
    })
  }

  const label = locale === "zh-TW" ? "精選專案" : "Selected Project"

  return createOgImage({
    eyebrow: `${label} · ${project.category}`,
    title: project.title,
    subtitle: project.ogSubtitle ?? project.subtitle,
    footer: `Kyle Wu · ${project.year ?? "2026"}`,
  })
}
