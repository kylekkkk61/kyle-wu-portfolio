export type ProjectLink = {
  label: string
  href: string
  type:
    | "github"
    | "demo"
    | "dashboard"
    | "case-study"
    | "external"
    | "landing-page"
    | "video"
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  category: string
  status?: string
  year?: string
  highlights: string[]
  tags: string[]
  links: ProjectLink[]
  featured?: boolean
  image?: string // Path to screenshot
  video?: string // Path to demo video
  order?: number
}

export const projects: Project[] = [
  {
    slug: "kaiyn-trading-bot",
    title: "Kaiyn Trading Bot",
    subtitle: "Production-style Telegram trading signal execution workflow.",
    description:
      "A Telegram-based execution workflow for crypto trading communities, designed around confirmation-first order flow, fixed-risk sizing, exchange-rule validation, encrypted API credentials, PostgreSQL-backed state, audit records, and Docker-first deployment.",
    category: "Trading Infrastructure",
    status: "Public GitHub project",
    year: "2026",
    highlights: [
      "Transforms Telegram trading signals into a structured execution workflow.",
      "Uses confirmation-first execution and fixed 1R risk sizing.",
      "Includes encrypted API credential storage, audit trails, backups, and CI checks.",
      "Designed as a production-style workflow rather than a profit-guaranteeing trading bot.",
    ],
    tags: [
      "Python",
      "Telegram Bot",
      "PostgreSQL",
      "Docker",
      "Bitget API",
      "Risk Controls",
      "CI/CD",
    ],
    links: [
      {
        label: "Landing Page",
        href: "https://kaiyn.kylekkkk.com/",
        type: "landing-page",
      },
      {
        label: "GitHub",
        href: "https://github.com/kaiyn-capital/kaiyn-trading-bot",
        type: "github",
      },
      // {
      //   label: "Demo Video",
      //   href: "#", // Placeholder for video
      //   type: "video",
      // },
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "prediction-market-execution-lab",
    title: "Prediction Market Execution Lab",
    subtitle:
      "Testing executable edge in Polymarket BTC short-horizon markets.",
    description:
      "A public fintech and market microstructure research lab studying whether apparent short-horizon prediction-market pricing edge can survive real execution frictions such as spread, fill probability, latency, position limits, and settlement outcomes.",
    category: "Market Microstructure Research",
    status: "Public research lab",
    year: "2026",
    highlights: [
      "Separates theoretical pricing edge from executable edge.",
      "Includes public-safe sample data, research reports, notebooks, and a live dashboard.",
      "Analyzes execution funnel, probability calibration, ML filtering, and risk simulation.",
      "Explicitly avoids profitability claims and private execution-sensitive details.",
    ],
    tags: [
      "Python",
      "Streamlit",
      "Polymarket",
      "Market Microstructure",
      "Execution Quality",
      "Probability Modeling",
      "Research",
    ],
    links: [
      {
        label: "Portfolio Page",
        href: "https://pm-lab.kylekkkk.com/",
        type: "case-study",
      },
      {
        label: "Dashboard",
        href: "https://prediction-market-execution-lab-4byaayq2atzengbe26nkfb.streamlit.app/",
        type: "dashboard",
      },
      {
        label: "GitHub",
        href: "https://github.com/kylekkkk61/prediction-market-execution-lab",
        type: "github",
      },
    ],
    featured: true,
    order: 2,
  },
]
