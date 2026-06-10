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
    | "internal"
}

export type ProjectVisualType = "kaiyn-workflow" | "pm-lab-research" | "default"

export type ProjectSection = {
  title: string
  body?: string
  items?: string[]
}

export type ProjectDetail = {
  whyItMatters?: {
    title: string
    body: string
  }
  context: ProjectSection
  whatIBuilt: ProjectSection
  process: ProjectSection
  demonstrates: ProjectSection
  techStack: string[]
  disclaimer?: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  shortDescription: string
  description: string
  category: string
  status?: string
  year?: string
  capabilities: string[]
  highlights: string[]
  tags: string[]
  links: ProjectLink[]
  visual: ProjectVisualType
  featured?: boolean
  image?: string
  video?: string
  videoPoster?: string
  order?: number
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    slug: "kaiyn-trading-bot",
    title: "Kaiyn Trading Bot",
    subtitle: "Trading signal execution workflow for crypto communities.",
    shortDescription:
      "A Telegram-based execution workflow that turns community trading signals into a structured, confirmation-first order process.",
    description:
      "A Telegram-based execution workflow for crypto trading communities, designed around confirmation-first order flow, fixed-risk sizing, exchange-rule validation, encrypted API credentials, PostgreSQL-backed state, audit records, and Docker-first deployment.",
    category: "Trading Infrastructure",
    status: "Public GitHub project",
    year: "2026",
    visual: "kaiyn-workflow",
    capabilities: [
      "Signal-to-execution workflow",
      "Risk-aware order validation",
      "Audit-ready backend infrastructure",
    ],
    tags: ["Python", "PostgreSQL", "Docker", "Telegram", "Exchange API"],
    highlights: [
      "Transforms Telegram trading signals into a structured execution workflow.",
      "Uses confirmation-first execution and fixed 1R risk sizing.",
      "Includes encrypted API credential storage, audit trails, backups, and CI checks.",
      "Designed as a production-style workflow rather than a profit-guaranteeing trading bot.",
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
    ],
    featured: true,
    order: 1,
    video: "https://cv.kylekkkk.com/kaiyn-demo.mp4",
    videoPoster: "https://cv.kylekkkk.com/kaiyn-demo-poster.webp",
    detail: {
      whyItMatters: {
        title: "Why It Matters",
        body: "This project shows how trading-community workflows can be converted into safer, auditable, confirmation-first execution systems.",
      },
      context: {
        title: "Context",
        body: "Crypto trading communities often distribute signals through Telegram, but manual execution introduces friction, inconsistent sizing, repeated actions, and unclear confirmation flow.",
      },
      whatIBuilt: {
        title: "What I Built",
        body: "I built a structured execution workflow that connects Telegram-based signal delivery with confirmation-first trading operations, exchange-rule validation, risk sizing, and backend audit records.",
      },
      process: {
        title: "Workflow",
        items: [
          "Signal parsing",
          "User confirmation",
          "Fixed-risk sizing",
          "Exchange contract validation",
          "Order preparation",
          "Execution",
          "Audit trail",
        ],
      },
      demonstrates: {
        title: "What This Demonstrates",
        items: [
          "Translating community workflow problems into software systems",
          "Designing risk-aware trading infrastructure",
          "Building backend workflows with state, validation, and auditability",
          "Thinking beyond scripts toward production-style operations",
        ],
      },
      techStack: [
        "Python",
        "Telegram Bot",
        "PostgreSQL",
        "Docker",
        "Bitget API",
        "CI/CD",
      ],
      disclaimer:
        "This project is presented as an engineering and workflow-design portfolio project. It does not represent financial advice or a claim of trading profitability.",
    },
  },
  {
    slug: "prediction-market-execution-lab",
    title: "Prediction Market Execution Lab",
    subtitle:
      "Testing executable edge in Polymarket BTC short-horizon markets.",
    shortDescription:
      "A public research lab testing whether short-horizon prediction-market edge survives real execution frictions.",
    description:
      "A public fintech and market microstructure research lab studying whether apparent short-horizon prediction-market pricing edge can survive real execution frictions such as spread, fill probability, latency, position limits, and settlement outcomes.",
    category: "Market Microstructure Research",
    status: "Public research lab",
    year: "2026",
    visual: "pm-lab-research",
    capabilities: [
      "Execution-quality analysis",
      "Probability calibration",
      "Public-safe research dashboard",
    ],
    tags: ["Python", "Streamlit", "Polymarket", "Research", "Data Analysis"],
    highlights: [
      "Separates theoretical pricing edge from executable edge.",
      "Includes public-safe sample data, research reports, notebooks, and a live dashboard.",
      "Analyzes execution funnel, probability calibration, ML filtering, and risk simulation.",
      "Explicitly avoids profitability claims and private execution-sensitive details.",
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
    detail: {
      whyItMatters: {
        title: "Why It Matters",
        body: "This project separates apparent market edge from executable edge, which is closer to how real trading and execution research should be evaluated.",
      },
      context: {
        title: "Context",
        body: "Short-horizon prediction markets may show apparent pricing edge, but apparent edge is not the same as executable edge.",
      },
      whatIBuilt: {
        title: "What I Built",
        body: "I built a public research lab with sample data, notebooks, reports, dashboard, execution diagnostics, calibration analysis, ML filtering, and risk simulation.",
      },
      process: {
        title: "Research Workflow",
        items: [
          "Market data sample",
          "Signal construction",
          "Execution funnel",
          "Fill diagnostics",
          "Calibration analysis",
          "Risk simulation",
          "Public-safe reporting",
        ],
      },
      demonstrates: {
        title: "What This Demonstrates",
        items: [
          "Market microstructure reasoning",
          "Data analysis and research communication",
          "Separating theoretical signal from executable outcome",
          "Building public-safe research artifacts without exposing sensitive execution data",
        ],
      },
      techStack: [
        "Python",
        "Streamlit",
        "Polymarket",
        "Market Microstructure",
        "Probability Modeling",
        "Execution Quality",
      ],
      disclaimer:
        "This project is presented as a public research and portfolio artifact. It does not represent financial advice, trading advice, or a claim of trading profitability.",
    },
  },
]
