import { createOgImage, ogImageSize } from "@/components/seo/og-card"
import { getProfile } from "@/data/profile"

export const alt = "Kyle Wu resume"
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
    eyebrow: locale === "zh-TW" ? "個人履歷" : "Resume",
    title: profile.name,
    subtitle: profile.alternateName,
    description:
      locale === "zh-TW"
        ? "金融科技 · 產品策略 · 市場分析"
        : "FinTech · Product Strategy · Market Analysis",
  })
}
