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
  positioning: "FinTech Builder / 產品策略 / 市場分析",
  heroDescription:
    "我將市場問題、產品構想與金融流程，轉化為可實際運作的 FinTech 系統，結合商業思維、資料分析與 AI 原生軟體開發。",
  whatIDo: {
    eyebrow: "專業領域",
    title:
      "我的工作橫跨商業策略、市場分析與技術實作，並將三者整合為可落地的解決方案。",
    body: [
      "我的專案通常從真實的商業、市場或流程問題出發：使用者如何做決策、金融流程在哪裡卡住、看似存在的市場優勢如何隨執行成本消失，以及資料如何改善實際執行。",
      "接著，我會把問題拆解並轉化為系統、研究流程、資料儀表板或面向使用者的產品。",
    ],
  },
  about:
    "我即將就讀華威商學院金融科技理學碩士，也是一名具備數位資產市場營運、產品策略與應用市場研究經驗的 FinTech Builder。\n\n目前的公開專案聚焦交易流程自動化與預測市場執行研究，重視風險控管、可公開驗證的分析、決策品質與實際可用的市場基礎設施。",
  capabilities: [
    {
      title: "從策略到系統的整合思維",
      description:
        "將商業策略、使用者痛點與金融流程問題，轉化為具體產品、工具，以及納入執行限制的系統。",
    },
    {
      title: "資料與市場分析",
      description:
        "運用資料分析、市場判讀與研究流程，評估使用者行為、風險與執行品質。",
    },
    {
      title: "金融科技系統與市場基礎設施",
      description:
        "針對金融流程、交易所 API、確認機制、稽核紀錄與營運風險控管，建置可實際運作的系統。",
    },
    {
      title: "產品、社群與使用者洞察",
      description:
        "從加密貨幣社群、交易教育與面向使用者的交易產品營運中，理解使用者行為與需求。",
    },
  ],
}

export function getProfile(locale: string): Profile {
  return locale === "zh-TW" ? profileZh : profileEn
}

// Keep a default export or backward-compatible reference if needed,
// but we will update components to use getProfile().
export const profile = profileEn
