import type { NextRequest } from "next/server"
import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

const intlMiddleware = createMiddleware(routing)

function mapChineseToken(tag: string): "zh-TW" | null {
  const lower = tag.toLowerCase()
  if (!lower.startsWith("zh")) return null

  // Map all traditional Chinese variants (Taiwan, Hong Kong, Macau, Hant script) to zh-TW
  if (
    lower.includes("hant") ||
    lower === "zh-tw" ||
    lower.startsWith("zh-tw-") ||
    lower === "zh-hk" ||
    lower.startsWith("zh-hk-") ||
    lower === "zh-mo" ||
    lower.startsWith("zh-mo-")
  ) {
    return "zh-TW"
  }
  return null
}

function normalizeAcceptLanguage(header: string | null): string | null {
  if (!header) return header
  return header
    .split(",")
    .map((entry) => {
      const [rawTag, ...params] = entry.trim().split(";")
      const mapped = mapChineseToken(rawTag.trim())
      return [mapped ?? rawTag.trim(), ...params].join(";")
    })
    .join(",")
}

export default function middleware(request: NextRequest) {
  const original = request.headers.get("accept-language")
  const normalized = normalizeAcceptLanguage(original)
  if (normalized && normalized !== original) {
    request.headers.set("accept-language", normalized)
  }
  return intlMiddleware(request)
}

export const config = {
  // Use edge runtime for fast TTFB (<50ms) instead of Node.js cold start (~1.5s)
  runtime: "experimental-edge",
  // Match only internationalized pathnames
  // Optimize: Exclude localized paths (/zh-TW) to bypass middleware entirely, allowing CDN-level static cache hits
  matcher: ["/", "/((?!api|_next|_vercel|zh-TW|.*\\..*).*)"],
}
