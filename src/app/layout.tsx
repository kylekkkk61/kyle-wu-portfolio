import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kylekkkk.com"),
  title: {
    default: "Kyle Wu — FinTech Builder & Crypto Market Research",
    template: "%s | Kyle Wu",
  },
  description:
    "Personal portfolio of Kyle Wu, focused on fintech systems, crypto trading workflows, execution quality, market microstructure, and risk-aware automation.",
  openGraph: {
    title: "Kyle Wu — FinTech Builder & Crypto Market Research",
    description:
      "Personal portfolio of Kyle Wu, focused on fintech systems, crypto trading workflows, execution quality, market microstructure, and risk-aware automation.",
    url: "https://kylekkkk.com",
    siteName: "Kyle Wu Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Wu — FinTech Builder & Crypto Market Research",
    description:
      "Personal portfolio of Kyle Wu, focused on fintech systems, crypto trading workflows, execution quality, market microstructure, and risk-aware automation.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
