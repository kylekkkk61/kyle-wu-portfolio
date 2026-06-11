import type { Metadata } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"
import "./globals.css"
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kylekkkk.com"),
  title: {
    default: "Kyle Wu — FinTech Builder & Applied Crypto Market Research",
    template: "%s | Kyle Wu",
  },
  description:
    "Personal portfolio of Kyle Wu, focused on fintech systems, crypto trading workflows, data-driven market research, execution quality, and business-to-system implementation.",
  openGraph: {
    title: "Kyle Wu — FinTech Builder & Applied Crypto Market Research",
    description:
      "Personal portfolio of Kyle Wu, focused on fintech systems, crypto trading workflows, data-driven market research, execution quality, and business-to-system implementation.",
    url: "https://www.kylekkkk.com",
    siteName: "Kyle Wu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/portfolio-og.png",
        width: 1200,
        height: 630,
        alt: "Kyle Wu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Wu — FinTech Builder & Applied Crypto Market Research",
    description:
      "Personal portfolio of Kyle Wu, focused on fintech systems, crypto trading workflows, data-driven market research, execution quality, and business-to-system implementation.",
    images: ["/og/portfolio-og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground relative flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteBackground />
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
