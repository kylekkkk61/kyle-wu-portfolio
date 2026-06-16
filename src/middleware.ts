import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Use edge runtime for fast TTFB (<50ms) instead of Node.js cold start (~1.5s)
  runtime: "experimental-edge",
  // Match only internationalized pathnames
  // Optimize: Exclude localized paths (/en, /zh-TW) to bypass middleware entirely, allowing CDN-level static cache hits
  matcher: ["/", "/((?!api|_next|_vercel|en|zh-TW|.*\\..*).*)"],
}
