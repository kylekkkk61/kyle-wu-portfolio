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

export type ProjectArtifact = {
  id: string
  title: string
  description: string
}

export type ProjectDetail = {
  whyItMatters?: {
    title: string
    body: string
  }
  communityContext?: {
    title: string
    paragraphs: string[]
    links?: { label: string; href: string }[]
  }
  context: ProjectSection
  whatIBuilt: ProjectSection
  process: ProjectSection
  demonstrates: ProjectSection
  techStack: string[]
  disclaimer?: string
  artifacts?: {
    title: string
    items: ProjectArtifact[]
  }
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

const projectsEn: Project[] = [
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
        href: "https://kaiyn.kylewu.me/",
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
    video: "https://cv.kylewu.me/kaiyn-demo.mp4",
    videoPoster: "https://cv.kylewu.me/kaiyn-demo-poster.webp",
    detail: {
      whyItMatters: {
        title: "Why It Matters",
        body: "This project shows how trading-community workflows can be converted into safer, auditable, confirmation-first execution systems.",
      },
      communityContext: {
        title: "Community Context",
        paragraphs: [
          "Kaiyn Trading Bot came from a real operating problem inside Kaiyn Capital, a crypto trading community that I founded and have operated for around three years.",
          "In a Telegram-based trading community, market commentary, trading signals, chart updates, and risk discussions often move quickly. That speed is useful, but it also creates friction: users need to interpret signals, manage risk, confirm order details, and avoid execution mistakes under time pressure.",
          "This project was built to make that workflow more structured. Instead of treating trading signals as plain text messages, the bot turns them into a confirmation-first execution process with validation, fixed-risk sizing, and clearer audit records.",
        ],
        links: [
          {
            label: "Kaiyn Capital Telegram",
            href: "https://t.me/kaiyncapital",
          },
        ],
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
        "Telegram",
        "PostgreSQL",
        "SQLAlchemy",
        "Docker",
        "GitHub Actions",
      ],
      disclaimer:
        "This project is presented as an engineering and workflow-design portfolio project. It does not represent financial advice or a claim of trading profitability.",
      artifacts: {
        title: "Representative Artifacts",
        items: [
          {
            id: "kaiyn-signal",
            title: "Signal Workflow",
            description:
              "Parsing unstructured Telegram messages into strict, validated JSON payloads.",
          },
          {
            id: "kaiyn-confirmation",
            title: "Confirmation-First Flow",
            description:
              "Interactive Telegram UI requiring explicit user approval before execution.",
          },
          {
            id: "kaiyn-audit",
            title: "Backend Audit Pipeline",
            description:
              "Immutable state tracking in PostgreSQL ensuring no duplicated orders.",
          },
        ],
      },
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
        href: "https://pm-lab.kylewu.me/",
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
      techStack: ["Python", "Streamlit", "Pandas", "NumPy"],
      disclaimer:
        "This project is presented as a public research and portfolio artifact. It does not represent financial advice, trading advice, or a claim of trading profitability.",
      artifacts: {
        title: "Representative Artifacts",
        items: [
          {
            id: "pm-lab-funnel",
            title: "Execution Funnel",
            description:
              "Visualizing the degradation of theoretical edge into executable edge due to frictions.",
          },
          {
            id: "pm-lab-calibration",
            title: "Calibration Simulation",
            description:
              "Modeling probability accuracy and risk exposure across varied market conditions.",
          },
          {
            id: "pm-lab-dashboard",
            title: "Research Dashboard",
            description:
              "Abstract view of market depth, liquidity metrics, and execution diagnostics.",
          },
        ],
      },
    },
  },
]

const projectsZh: Project[] = [
  {
    slug: "kaiyn-trading-bot",
    title: "Kaiyn Trading Bot",
    subtitle: "專為加密貨幣社群打造的交易訊號執行工作流",
    shortDescription:
      "一個基於 Telegram 的執行工作流，將社群交易訊號轉化為結構化且「確認優先」的下單流程。",
    description:
      "專為加密貨幣交易社群設計的 Telegram 執行工作流。系統強調「確認優先 (Confirmation-first)」的訂單流程、固定風險部位控管 (Fixed-risk sizing)、交易所規則驗證、加密 API 憑證儲存、以 PostgreSQL 為基礎的狀態管理、完整的稽核軌跡，以及 Docker 優先的部署架構。",
    category: "交易基礎設施",
    status: "開源 GitHub 專案",
    year: "2026",
    visual: "kaiyn-workflow",
    capabilities: [
      "訊號到執行的工作流",
      "具備風險意識的訂單驗證",
      "符合稽核標準的後端基礎設施",
    ],
    tags: ["Python", "PostgreSQL", "Docker", "Telegram", "Exchange API"],
    highlights: [
      "將 Telegram 上的交易訊號無縫轉換為結構化的執行工作流。",
      "採用確認優先的執行機制與固定 1R 風險部位控管。",
      "內建加密 API 憑證儲存、稽核軌跡、資料庫備份與 CI 檢查流程。",
      "設計理念為生產級的營運工具，而非標榜獲利的自動交易機器人。",
    ],
    links: [
      {
        label: "專案首頁",
        href: "https://kaiyn.kylewu.me/",
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
    video: "https://cv.kylewu.me/kaiyn-demo.mp4",
    videoPoster: "https://cv.kylewu.me/kaiyn-demo-poster.webp",
    detail: {
      whyItMatters: {
        title: "專案價值",
        body: "本專案展示了如何將混亂的交易社群流程，轉化為更安全、可稽核、且需操作確認的系統化執行機制。",
      },
      communityContext: {
        title: "社群背景與痛點",
        paragraphs: [
          "Kaiyn Trading Bot 源自我創立並營運近三年的加密貨幣交易社群 Kaiyn Capital 內部的實際營運問題。",
          "在以 Telegram 為主的交易社群中，市場新聞、行情討論、交易訊號和圖表更新的速度非常快。這種即時性對交易來說很有用，但也帶來了一定程度的操作摩擦：用戶必須在短時間內解讀訊號、計算與管理風險與下單，在多個應用程式內切換的過程，總是難以避免的出現執行錯誤。",
          "建立這個專案是為了讓此工作流更加結構化。我們不再將交易訊號視為純文字訊息，而是透過機器人將其轉化為具備驗證、固定風險部位控制與清晰稽核紀錄的一站式執行流程。",
        ],
        links: [
          {
            label: "Kaiyn Capital Telegram",
            href: "https://t.me/kaiyncapital",
          },
        ],
      },
      context: {
        title: "背景與挑戰",
        body: "加密貨幣交易社群經常透過 Telegram 發送訊號，但手動執行往往帶來摩擦、不一致的部位大小、重複操作以及模糊的確認流程。",
      },
      whatIBuilt: {
        title: "解決方案",
        body: "我建立了一個結構化的執行工作流，將 Telegram 上的訊號傳遞與確認優先的交易操作、交易所規則驗證、風險部位計算及後端稽核紀錄相互連結。",
      },
      process: {
        title: "工作流程",
        items: [
          "訊號解析",
          "用戶確認",
          "固定風險部位計算",
          "交易所合約驗證",
          "訂單準備",
          "訂單執行",
          "稽核追蹤",
        ],
      },
      demonstrates: {
        title: "核心能力展現",
        items: [
          "將社群工作流程的問題轉化為軟體系統設計",
          "設計具備風險意識的交易基礎設施",
          "建構具備狀態管理、驗證與稽核能力的後端工作流",
          "跳脫單純腳本思維，邁向生產級營運工具設計",
        ],
      },
      techStack: [
        "Python",
        "Telegram",
        "PostgreSQL",
        "SQLAlchemy",
        "Docker",
        "GitHub Actions",
      ],
      disclaimer:
        "本專案作為工程與工作流設計的作品集展示。不代表任何財務建議或交易獲利保證。",
      artifacts: {
        title: "代表性產出",
        items: [
          {
            id: "kaiyn-signal",
            title: "訊號解析工作流",
            description:
              "將非結構化的 Telegram 訊息解析為嚴謹且經過驗證的 JSON 格式資料。",
          },
          {
            id: "kaiyn-confirmation",
            title: "確認優先流程",
            description:
              "互動式 Telegram 使用者介面，要求用戶在訂單執行前進行明確授權。",
          },
          {
            id: "kaiyn-audit",
            title: "後端稽核管線",
            description:
              "透過 PostgreSQL 進行不可變的狀態追蹤，確保訂單絕不重複執行。",
          },
        ],
      },
    },
  },
  {
    slug: "prediction-market-execution-lab",
    title: "Prediction Market Execution Lab",
    subtitle: "在 Polymarket 短期預測市場中驗證「可執行優勢」",
    shortDescription:
      "一個公開的研究項目，旨在測試短期的預測市場定價優勢是否能在真實的執行摩擦中存活。",
    description:
      "這是一個公開的金融科技與市場微結構研究項目，主要探討短期預測市場中看似存在的「定價優勢 (Pricing edge)」，是否能在滑價、成交機率、延遲、部位限制與結算結果等真實執行摩擦中存活下來。",
    category: "市場微觀結構研究",
    status: "公開 GitHub 研究報告",
    year: "2026",
    visual: "pm-lab-research",
    capabilities: [
      "執行品質分析",
      "機率校準 (Probability calibration)",
      "完成數據清洗的公開研究儀表板",
    ],
    tags: ["Python", "Streamlit", "Polymarket", "Research", "Data Analysis"],
    highlights: [
      "嚴格區分「理論定價優勢」與實際的「可執行優勢」。",
      "提供安全公開的樣本數據、研究報告、Notebooks 以及即時互動儀表板。",
      "深入分析執行漏斗 (Execution funnel)、機率校準、機器學習過濾與風險模擬。",
      "明確避免不實的獲利宣稱與暴露敏感的真實交易執行資料。",
    ],
    links: [
      {
        label: "研究作品頁面",
        href: "https://pm-lab.kylewu.me/",
        type: "case-study",
      },
      {
        label: "即時儀表板",
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
        title: "專案價值",
        body: "這個專案區分了表面上的市場優勢與實際的可執行優勢，這更貼近真實交易與執行研究應該被評估的方式。",
      },
      context: {
        title: "背景與挑戰",
        body: "短期預測市場有時會展現出理論上的定價優勢，但理論優勢並不等於最終能落袋的可執行優勢。",
      },
      whatIBuilt: {
        title: "解決方案",
        body: "我建立了一個包含樣本數據、Notebooks、分析報告、儀表板、執行診斷、校準分析、機器學習過濾與風險模報告。",
      },
      process: {
        title: "研究工作流程",
        items: [
          "市場資料抽樣",
          "訊號建構",
          "執行漏斗分析",
          "成交診斷",
          "機率校準分析",
          "風險模擬",
          "安全公開的報告生成",
        ],
      },
      demonstrates: {
        title: "核心能力展現",
        items: [
          "市場微觀結構邏輯推論",
          "數據分析與研究報告的溝通能力",
          "區分理論訊號與實際可執行結果",
          "在不暴露敏感執行資料的前提下，建置安全公開的研究產出",
        ],
      },
      techStack: ["Python", "Streamlit", "Pandas", "NumPy"],
      disclaimer:
        "本專案作為公開研究與作品集展示。不代表任何財務建議、交易建議或獲利保證。",
      artifacts: {
        title: "代表性產出",
        items: [
          {
            id: "pm-lab-funnel",
            title: "執行漏斗分析",
            description:
              "視覺化呈現理論優勢如何因市場摩擦而衰減成最終的可執行優勢。",
          },
          {
            id: "pm-lab-calibration",
            title: "機率校準模擬",
            description: "在不同的市場條件下，建立機率準確性與風險曝險的模型。",
          },
          {
            id: "pm-lab-dashboard",
            title: "研究儀表板",
            description: "摘要呈現市場深度、流動性指標與執行診斷的抽象視圖。",
          },
        ],
      },
    },
  },
]

export function getProjects(locale: string): Project[] {
  return locale === "zh-TW" ? projectsZh : projectsEn
}

export const projects = projectsEn
