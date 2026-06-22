import { ArrowLeft, Download } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { SectionContainer } from "@/components/layout/section-container"
import { ResumeViewerWrapper } from "@/components/resume-viewer-wrapper"
import { buttonVariants } from "@/components/ui/button"
import { links } from "@/data/links"
import { Link } from "@/i18n/routing"
import { siteConfig } from "@/lib/seo"
import { cn } from "@/lib/utils"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  const canonicalPath = locale === "en" ? "/resume" : `/${locale}/resume`

  return {
    title: t("resumeTitle"),
    description: t("resumeDescription"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/resume",
        "zh-TW": "/zh-TW/resume",
        "x-default": "/resume",
      },
    },
    openGraph: {
      title: t("resumeTitle"),
      description: t("resumeDescription"),
      url: `${siteConfig.url}${canonicalPath}`,
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "profile",
      images: [
        {
          url: "/og/portfolio-og.png",
          width: 1200,
          height: 630,
          alt: t("resumeTitle"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("resumeTitle"),
      description: t("resumeDescription"),
      images: ["/og/portfolio-og.png"],
    },
  }
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <SectionContainer>
        {/* Navigation / Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "group text-muted-foreground hover:text-foreground -ml-4 px-4",
            )}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <a
            href={links.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <ResumeViewerWrapper fileUrl={links.resumePdf} />
      </SectionContainer>
    </div>
  )
}
