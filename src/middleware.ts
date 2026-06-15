import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  // Use edge runtime for fast TTFB (<50ms) instead of Node.js cold start (~1.5s)
  runtime: "experimental-edge",
  // Match only internationalized pathnames
  matcher: ["/", "/(en|zh-TW)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
}
