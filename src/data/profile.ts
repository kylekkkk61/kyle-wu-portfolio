export type Profile = {
  name: string
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
  positioning: "FinTech Builder / Crypto Markets / Applied Research",
  heroDescription:
    "I turn market, product, and trading ideas into practical fintech systems — combining business thinking, data analysis, and software execution across crypto markets and applied research.",
  whatIDo: {
    eyebrow: "What I Do",
    title:
      "I work on the bridge between business problems and technical execution.",
    body: [
      "My projects usually start from a real operational or market question: how users make decisions, how trading workflows break down, how apparent market edge decays, or how data can support better execution.",
      "I then turn those questions into structured systems, research workflows, dashboards, or public-facing products.",
    ],
  },
  about:
    "I am a crypto trader, fintech builder, and incoming MSc Financial Technology student at Warwick Business School. My work sits between market operations, product thinking, and software systems.\n\nMy current public projects focus on Telegram-based trading execution workflows and prediction-market execution research, with an emphasis on risk controls, public-safe analysis, and practical market infrastructure.",
  capabilities: [
    {
      title: "Business-to-System Thinking",
      description:
        "Turning abstract business ideas, user pain points, and trading workflow problems into structured products, tools, and execution systems.",
    },
    {
      title: "Data & Market Analysis",
      description:
        "Using data analysis, market reasoning, and research workflows to evaluate behavior, risk, and execution quality.",
    },
    {
      title: "FinTech & Trading Infrastructure",
      description:
        "Building practical systems around crypto trading workflows, exchange APIs, confirmation flows, audit trails, and operational risk controls.",
    },
    {
      title: "Product & Community Insight",
      description:
        "Understanding user behavior from operating crypto communities, education workflows, and product-facing trading operations.",
    },
  ],
}

const profileZh: Profile = {
  name: "Kyle Wu",
  positioning: "FinTech 系統建置 / 加密貨幣市場 / 應用研究",
  heroDescription:
    "我將市場趨勢、產品痛點與交易策略轉化為實用的 FinTech 系統——結合商業思維、數據分析與軟體開發，專注於加密貨幣市場與應用研究領域。",
  whatIDo: {
    eyebrow: "專業領域",
    title: "我致力於搭建商業問題與技術執行之間的橋樑。",
    body: [
      "我的專案通常源自於真實的營運或市場問題：使用者如何做決策、交易工作流在哪裡失效、看似存在的市場優勢如何衰退，以及數據如何協助更好的交易執行。",
      "我將這些問題轉化為結構化的系統、研究工作流程、數據儀表板，或是面向大眾的產品。",
    ],
  },
  about:
    "我是一名加密貨幣交易員、FinTech 系統建置者，即將就讀華威商學院 (Warwick Business School) 金融科技碩士。我的工作介於市場營運、產品思維與軟體系統之間。\n\n我目前的公開專案著重於基於 Telegram 的交易執行工作流，以及預測市場的執行研究，特別強調風險控制、安全公開的分析與實用的市場基礎設施。",
  capabilities: [
    {
      title: "商業至系統化思維",
      description:
        "將抽象的商業點子、使用者痛點與交易工作流問題，轉化為結構化的產品、工具與執行系統。",
    },
    {
      title: "數據與市場分析",
      description:
        "運用數據分析、市場推論與研究工作流程，來評估使用者行為、風險與交易執行品質。",
    },
    {
      title: "FinTech 與交易基礎設施",
      description:
        "圍繞著加密貨幣交易工作流、交易所 API、確認流程、稽核軌跡與營運風險控制，建立實用的系統。",
    },
    {
      title: "產品與社群洞察",
      description:
        "從營運加密貨幣社群、教育工作流與面向產品的交易營運中，深入了解使用者行為。",
    },
  ],
}

export function getProfile(locale: string): Profile {
  return locale === "zh-TW" ? profileZh : profileEn
}

// Keep a default export or backward-compatible reference if needed,
// but we will update components to use getProfile().
export const profile = profileEn
