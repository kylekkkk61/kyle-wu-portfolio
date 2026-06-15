import type { Metadata } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SiteBackground } from "@/components/layout/site-background"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
})

import { getTranslations } from "next-intl/server"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    metadataBase: new URL("https://kylewu.me"),
    title: {
      default: t("title"),
      template: `%s | ${t("titleShort")}`,
    },
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://kylewu.me",
      siteName: t("titleShort"),
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "website",
      images: [
        {
          url: "/og/portfolio-og.png",
          width: 1200,
          height: 630,
          alt: t("titleShort"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og/portfolio-og.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { setRequestLocale } from "next-intl/server"
import { GoogleAnalytics } from "@next/third-parties/google"

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)

  // Ensure that the incoming `locale` is valid
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground relative flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SiteBackground />
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
