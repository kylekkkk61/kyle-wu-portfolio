import { createOgImage, ogImageSize } from "@/components/seo/og-card"
import { getProfile } from "@/data/profile"

export const alt = "Kyle Wu portfolio"
export const size = ogImageSize
export const contentType = "image/png"
export const runtime = "nodejs"

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const profile = getProfile(locale)

  return createOgImage({
    eyebrow: locale === "zh-TW" ? "個人作品集" : "Personal Portfolio",
    title: profile.name,
    subtitle: profile.positioning.replaceAll(" / ", " · "),
  })
}
