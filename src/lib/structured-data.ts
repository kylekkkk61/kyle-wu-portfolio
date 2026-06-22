import { links } from "@/data/links"
import { siteConfig } from "@/lib/seo"

/**
 * Generate Person schema markup
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [links.github, links.linkedin],
    jobTitle: "FinTech Builder",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Warwick Business School",
    },
    knowsAbout: [
      "Financial Technology",
      "Trading Infrastructure",
      "Crypto Market Operations",
      "Market Microstructure",
      "Execution Quality",
      "Applied Market Research",
      "AI-native product building",
    ],
  }
}

/**
 * Generate WebSite schema markup
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locales,
    description: siteConfig.description,
  }
}

/**
 * Generate ProfilePage schema markup for the home page
 */
export function getProfilePageSchema(locale: string) {
  const canonicalPath = locale === "en" ? "" : `/${locale}`
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${siteConfig.url}${canonicalPath}`,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "FinTech Builder",
      description:
        locale === "zh-TW"
          ? "Kyle Wu 的個人作品集，聚焦金融科技系統建置、交易工作流自動化、加密貨幣市場營運、市場微結構研究、執行品質分析與 AI 原生產品開發。"
          : siteConfig.description,
    },
  }
}

/**
 * Generate project-specific schema markup
 */
export function getProjectSchema(
  project: {
    title: string
    slug: string
    shortDescription?: string
    description: string
  },
  locale: string,
) {
  const canonicalPath =
    locale === "en"
      ? `/projects/${project.slug}`
      : `/${locale}/projects/${project.slug}`
  const url = `${siteConfig.url}${canonicalPath}`

  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    name: project.title,
    description: project.shortDescription || project.description,
    url: url,
    inLanguage: locale === "zh-TW" ? "zh-TW" : "en",
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
  }

  if (project.slug === "kaiyn-trading-bot") {
    return {
      ...baseSchema,
      "@type": "SoftwareSourceCode",
      programmingLanguage: "Python",
      codeRepository: "https://github.com/kaiyn-capital/kaiyn-trading-bot",
      targetProduct: {
        "@type": "SoftwareApplication",
        name: "Kaiyn Trading Bot",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Docker-ready OS",
      },
    }
  }

  if (project.slug === "prediction-market-execution-lab") {
    return {
      ...baseSchema,
      "@type": "CreativeWork",
      genre: "Research Project",
      keywords:
        "Prediction Markets, Market Microstructure, Execution Quality, Polymarket",
      about: [
        {
          "@type": "Thing",
          name: "Market Microstructure",
        },
        {
          "@type": "Thing",
          name: "Execution Quality",
        },
      ],
    }
  }

  return {
    ...baseSchema,
    "@type": "CreativeWork",
  }
}
