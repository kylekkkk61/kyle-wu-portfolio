export type Profile = {
  name: string
  alternateName: string
  positioning: string
  heroDescription: string
  whatIDo: {
    eyebrow: string
    title: string
    body: string[]
  }
  about: string
  capabilities: {
    title: string
    description: string
  }[]
}

const profileEn: Profile = {
  name: "Kyle Wu",
  alternateName: "Ping-Ju Wu · 吳秉儒",
  positioning: "FinTech Builder / Product Strategy / Market Analysis",
  heroDescription:
    "I turn market problems, product ideas, and financial workflows into practical fintech systems — combining business thinking, data analysis, and AI-native software execution.",
  whatIDo: {
    eyebrow: "What I Do",
    title:
      "I work on the bridge between business strategy, market analysis, and technical execution.",
    body: [
      "My projects usually start from a real business, market, or workflow question: how users make decisions, how financial workflows break down, how apparent market edge decays, or how data can support better execution.",
      "I then turn those questions into structured systems, research workflows, dashboards, or public-facing products.",
    ],
  },
  about:
    "I am an incoming MSc Financial Technology student at Warwick Business School and a fintech builder with experience across digital asset market operations, product strategy, and applied market research.\n\nMy current public projects focus on trading workflow automation and prediction-market execution research, with an emphasis on risk controls, public-safe analysis, decision quality, and practical market infrastructure.",
  capabilities: [
    {
      title: "Strategy-to-System Thinking",
      description:
        "Turning business strategy, user pain points, and financial workflow problems into structured products, tools, and execution-aware systems.",
    },
    {
      title: "Data & Market Analysis",
      description:
        "Using data analysis, market reasoning, and research workflows to evaluate behavior, risk, and execution quality.",
    },
    {
      title: "FinTech Systems & Market Infrastructure",
      description:
        "Building practical systems around financial workflows, exchange APIs, confirmation flows, audit trails, and operational risk controls.",
    },
    {
      title: "Product, Community & User Insight",
      description:
        "Understanding user behavior from operating crypto communities, education workflows, and product-facing trading operations.",
    },
  ],
}

const profileZh: Profile = {
  name: "Kyle Wu",
  alternateName: "Ping-Ju Wu · 吳秉儒",
  positioning: "FinTech 系統建置 / 產品策略規劃 / 市場數據分析",
  heroDescription:
    "我擅長將市場問題、產品構想與金融工作流轉化為實用的 FinTech 系統——結合商業思維、數據分析，以及導入 AI 原生的軟體執行力。",
  whatIDo: {
    eyebrow: "專業領域",
    title: "我致力於在商業策略、市場分析與技術落地之間搭建起溝通的橋樑。",
    body: [
      "我的專案通常源自真實的商業、市場或工作流問題：使用者如何做決策、金融工作流程在哪裡產生摩擦、看似存在的市場優勢如何衰退，以及數據如何協助更好的交易執行。",
      "我會將這些問題解構，並轉化為結構化的系統、研究工作流程、數據儀表板，或是面向使用者的實際產品。",
    ],
  },
  about:
    "我是即將入學華威商學院（Warwick Business School）的金融科技碩士生。作為一名金融科技建置者，我擁有數位資產市場營運、產品策略規劃與應用市場研究的實務經驗。\n\n我目前的公開專案專注於交易工作流自動化與預測市場執行研究，特別強調風險控制、公開安全分析、決策品質以及實用的市場基礎設施。",
  capabilities: [
    {
      title: "策略到系統的架構思維",
      description:
        "能將商業策略、使用者痛點與金融工作流問題，轉化為結構化的產品、工具與具備執行感知的系統。",
    },
    {
      title: "數據與市場分析",
      description:
        "運用數據分析、市場微結構推論與研究工作流程，來評估行為模式、風險曝險與交易執行品質。",
    },
    {
      title: "金融科技系統與市場基礎設施",
      description:
        "圍繞著金融工作流、交易所 API、確認流程、稽核軌跡與營運風險控制，建置實用且穩定的系統。",
    },
    {
      title: "產品、社群與使用者洞察",
      description:
        "從營運加密貨幣社群、交易教育與面向大眾的市場營運中，深入了解並優化使用者的真實行為模式。",
    },
  ],
}

export function getProfile(locale: string): Profile {
  return locale === "zh-TW" ? profileZh : profileEn
}

// Keep a default export or backward-compatible reference if needed,
// but we will update components to use getProfile().
export const profile = profileEn
