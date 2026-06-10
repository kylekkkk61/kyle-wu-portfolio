# Kyle Wu Personal Portfolio Website — 完整上線交付規格

## 0. 文件目的

本文件是給 coding agent 使用的完整專案要求。  
請根據本文件建立 Kyle Wu 的 personal portfolio website，並以「完整可上線交付」為目標。

本專案不是實驗稿、草稿、MVP、暫時版或普通履歷模板。  
交付結果必須是可以直接公開放在 LinkedIn、GitHub、X、社交平台、求職／networking 場景使用的正式個人作品集網站。

網站公開內容使用英文。  
本文件使用中文，供 Kyle 與 coding agent 討論、規劃、實作與驗收使用。

---

## 1. 專案背景

Kyle Wu 目前已有兩個公開專案：

1. Kaiyn Trading Bot  
   GitHub: https://github.com/kaiyn-capital/kaiyn-trading-bot  
   定位：production-style Telegram trading signal execution workflow for crypto trading communities.

2. Prediction Market Execution Lab  
   GitHub: https://github.com/kylekkkk61/prediction-market-execution-lab  
   Portfolio Page: https://pm-lab.kylekkkk.com/  
   Dashboard: https://prediction-market-execution-lab-4byaayq2atzengbe26nkfb.streamlit.app/  
   定位：public FinTech / market microstructure research lab testing executable edge in Polymarket BTC short-horizon markets.

本網站的任務是把 Kyle 的個人介紹、背景、技能方向、社交連結，以及上述兩個專案整理成一個高品質、現代化、可信、容易擴充的個人入口。

---

## 2. 核心目標

建立一個簡潔但完整的 personal portfolio website，使訪客能在 30–90 秒內理解：

1. Kyle 是誰
2. Kyle 的專業定位是什麼
3. Kyle 做過哪些具代表性的公開專案
4. Kyle 的能力組合與研究／工程方向是什麼
5. 如何進一步查看專案、GitHub、dashboard、LinkedIn 或聯絡 Kyle

網站必須達成：

- 現代化
- 美觀
- 專業
- 可信
- responsive
- 容易擴充新專案
- 適合 fintech / research / developer / founder portfolio 場景
- 不誇大 trading 或 research project 的績效
- 不公開任何敏感資訊
- 不做成普通履歷模板
- 不使用 placeholder 或空泛內容充數

---

## 3. Kyle 的公開定位

Kyle 的公開身份與方向：

- Crypto trader
- FinTech builder
- Founder / community operator
- Incoming MSc Financial Technology student at Warwick Business School
- Builder focused on trading infrastructure, crypto market operations, execution quality, market microstructure, applied research, and risk-aware automation

網站敘事應圍繞：

```text
Crypto trading community experience
→ real execution workflow pain points
→ production-style Telegram trading bot
→ prediction-market research experiment
→ executable-edge / market microstructure analysis
→ fintech builder with trading, research, and engineering orientation
```

網站不應把 Kyle 呈現成單純「會寫 bot」或「crypto trader」。  
更準確的定位是：

```text
A fintech builder working across crypto trading workflows, execution systems, market-structure research, and risk-aware automation.
```

---

## 4. 網站公開語言

網站公開文案請使用英文。

Coding agent 與 Kyle 的討論、規劃、PR body、回報可使用繁體中文。

英文文案要求：

- 專業
- 清楚
- 精煉
- 不浮誇
- 不像傳統履歷模板
- 不使用過度 marketing buzzwords
- 不宣稱未被驗證的成果
- 不宣稱 trading bot 或 research project 能穩定盈利

---

## 5. 技術棧要求

### 5.1 必要技術棧

使用：

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- pnpm

請使用目前穩定且適合 2026 年 Next.js 生態的版本。  
若初始化工具提供最新版穩定版本，優先使用官方預設。

### 5.2 架構要求

使用：

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS v4
- shadcn/ui components
- pnpm package manager
- lucide-react icons
- server components 優先
- client components 僅在必要互動時使用

可視需求加入：

- next-themes：若 Kyle 決定支援 light / dark / system theme
- motion library：僅用於輕量、克制、提升質感的動畫
- clsx / tailwind-merge / class-variance-authority：通常 shadcn/ui 會需要
- MDX：僅在需要 project detail pages 或 case study pages 時使用
- zod：只有在資料 schema validation 明顯有價值時使用

### 5.3 不應加入的技術

不得在沒有明確必要性的情況下加入：

- backend
- database
- auth
- CMS
- user account
- payment
- server actions
- API routes
- newsletter system
- complex analytics dashboard
- heavy animation framework
- large client-side state management library
- unnecessary third-party scripts

此網站本質是 public portfolio site，不需要被工程化成大型 web app。

---

## 6. 部署要求

優先部署到 Vercel。

原因：

- 此專案是 Next.js portfolio site
- 不需要 persistent backend
- 不需要 database
- Vercel 對 Next.js 支援完整
- GitHub push / PR preview workflow 直接
- custom domain 綁定方便
- portfolio site 的部署成本與維護成本低

Railway 可作為備選，但只有在 Kyle 明確需要 backend server、長時間運行服務或特殊部署條件時才考慮。  
在目前需求下，Vercel 是優先方案。

---

## 7. Git workflow

請遵守：

1. 不直接改 main
2. 使用 branch → commit → PR
3. commit title 使用 Conventional Commits
4. PR title 使用 Conventional Commits
5. 每次 PR 應可審查、可回滾、可驗收
6. 不提交敏感資訊
7. 不提交 `.env` 或 private credentials
8. 不提交不必要的 build artifacts

建議完整交付可拆成以下 PR：

```text
PR 1: feat: scaffold portfolio website
PR 2: feat: add modular portfolio content system
PR 3: feat: add polished responsive sections
PR 4: feat: add SEO metadata and deployment readiness
```

如果 coding agent 能在單一 PR 中完成且保持 diff 清楚，也可使用單一 PR。  
但不得以「之後再補」為理由留下半成品。

---

## 8. 禁止交付標準

不得交付以下結果：

- placeholder 區塊
- lorem ipsum
- TODO 留在公開頁面
- 空 project card
- 無效連結
- 未處理 mobile layout
- 只有 scaffold 沒有內容
- 只有 shadcn/ui 預設元件堆疊
- 看起來像普通履歷模板
- 視覺 hierarchy 不清楚
- project content hard-code 在 component 中
- 新增專案需要改多個 component
- 沒有 metadata
- 沒有 basic SEO
- build 不通過
- lint 不通過
- external links 無法正常開啟
- contact link 無法使用
- 使用誇大盈利或投資暗示文案
- 暴露敏感資訊

---

## 9. 個人資訊

Name:

```text
Kyle Wu
```

Primary public positioning:

```text
FinTech Builder / Crypto Market Research / Trading Systems
```

Hero description 預設文案：

```text
I build applied fintech systems and market-structure research projects across crypto trading workflows, execution quality, and risk-aware automation.
```

Alternative hero description：

```text
I work at the intersection of crypto market operations, trading infrastructure, and applied fintech research.
```

---

## 10. 聯絡資訊與連結

LinkedIn:

```text
https://www.linkedin.com/in/kylewu0610/
```

Email:

```text
itskyle610610@gmail.com
```

Project links:

```text
Kaiyn Trading Bot GitHub:
https://github.com/kaiyn-capital/kaiyn-trading-bot

Prediction Market Execution Lab GitHub:
https://github.com/kylekkkk61/prediction-market-execution-lab

Prediction Market Execution Lab Portfolio Page:
https://pm-lab.kylekkkk.com/

Prediction Market Execution Lab Dashboard:
https://prediction-market-execution-lab-4byaayq2atzengbe26nkfb.streamlit.app/
```

若需要 Kyle 的主 GitHub profile，請與 Kyle 確認是否使用：

```text
https://github.com/kylekkkk61
```

---

## 11. 首頁資訊架構

首頁應是一個完整的 one-page portfolio landing page。

必要區塊：

```text
1. Hero
2. Selected Projects
3. About / Background
4. Focus Areas
5. Links / Contact
6. Footer
```

可選區塊，需先與 Kyle 討論：

```text
- Experience Timeline
- Resume Download
- Project detail pages
- Featured screenshots
- Selected metrics / highlights
- GitHub profile section
```

首頁應該完整，但不要冗長。  
每個區塊都應有明確目的，不要為了填滿頁面加入低價值內容。

---

## 12. Hero Section 要求

目的：

- 5 秒內讓訪客知道 Kyle 是誰
- 建立 fintech / trading / research / builder 的定位
- 引導訪客查看 projects 或聯絡 Kyle

必備內容：

- Name
- One-line positioning
- Short description
- Primary CTA
- Secondary CTA links

建議內容：

```text
Kyle Wu

FinTech Builder / Crypto Market Research / Trading Systems

I build applied fintech systems and market-structure research projects across crypto trading workflows, execution quality, and risk-aware automation.
```

CTA examples:

```text
View Projects
GitHub
LinkedIn
Contact
```

要求：

- Hero 不可過長
- 不可使用空泛自我介紹
- 不可寫成履歷開頭
- CTA 必須清楚
- mobile 上必須有良好閱讀性

---

## 13. Selected Projects Section 要求

這是首頁核心區塊。

目前展示兩個 project cards：

1. Kaiyn Trading Bot
2. Prediction Market Execution Lab

每張 project card 至少包含：

- project name
- short tagline
- one-line or two-line description
- category
- status
- year
- highlights
- tags
- links
- optional image / screenshot

Project section 必須是 data-driven。  
ProjectCard component 不得 hard-code 任何單一專案內容。  
新增新專案時應只需要新增資料 object 與 optional image。

---

## 14. 專案資料結構

請建立類似以下資料結構。

建議檔案：

```text
src/data/projects.ts
```

或：

```text
src/content/projects.ts
```

建議 TypeScript schema：

```ts
export type ProjectLink = {
  label: string
  href: string
  type?: "github" | "demo" | "dashboard" | "case-study" | "external"
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
  image?: string
}
```

可加入 `order` 欄位控制排序：

```ts
order?: number
```

可加入 `featured` 控制是否出現在首頁：

```ts
featured?: boolean
```

---

## 15. 專案資料內容

### 15.1 Kaiyn Trading Bot

建議資料：

```ts
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
    "Designed as a production-style workflow rather than a profit-guaranteeing trading bot."
  ],
  tags: [
    "Python",
    "Telegram Bot",
    "PostgreSQL",
    "Docker",
    "Bitget API",
    "Risk Controls",
    "CI/CD"
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/kaiyn-capital/kaiyn-trading-bot",
      type: "github"
    }
  ],
  featured: true
}
```

### 15.2 Prediction Market Execution Lab

建議資料：

```ts
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
    "Explicitly avoids profitability claims and private execution-sensitive details."
  ],
  tags: [
    "Python",
    "Streamlit",
    "Polymarket",
    "Market Microstructure",
    "Execution Quality",
    "Probability Modeling",
    "Research"
  ],
  links: [
    {
      label: "Portfolio Page",
      href: "https://pm-lab.kylekkkk.com/",
      type: "case-study"
    },
    {
      label: "Dashboard",
      href: "https://prediction-market-execution-lab-4byaayq2atzengbe26nkfb.streamlit.app/",
      type: "dashboard"
    },
    {
      label: "GitHub",
      href: "https://github.com/kylekkkk61/prediction-market-execution-lab",
      type: "github"
    }
  ],
  featured: true
}
```

Coding agent 可優化英文文案，但必須保持事實準確、保守，不得誇大。

---

## 16. About / Background Section 要求

目的：

- 補足 Kyle 的背景
- 讓訪客理解 Kyle 的學術、職涯與專案方向
- 連接 trading、research、engineering、product/community 經驗

建議英文內容：

```text
I am a crypto trader, fintech builder, and incoming MSc Financial Technology student at Warwick Business School. My work focuses on the intersection of trading operations, market structure, risk management, and applied software engineering.

I have built public projects around Telegram-based trading signal execution and prediction-market execution research, with an emphasis on workflow design, execution quality, public-safe research communication, and risk-aware automation.
```

可選 bullets：

```text
- Incoming MSc Financial Technology student at Warwick Business School
- Background in crypto trading, community operations, and fintech product building
- Focused on trading infrastructure, market microstructure, execution quality, and applied research
```

要求：

- 不要寫太長
- 不要變成自傳
- 不要寫成傳統 CV
- 不要過度自誇
- 不要宣稱未驗證成效

---

## 17. Focus Areas Section 要求

建議四個 focus cards：

### Trading Infrastructure

```text
Telegram workflows, exchange API integration, execution confirmation, credential security, state management, and audit trails.
```

### Market Microstructure

```text
Spread, fill probability, latency, short-horizon markets, settlement outcomes, and the gap between theoretical and executable edge.
```

### Applied Research

```text
Public-safe datasets, notebooks, research reports, probability calibration, ML diagnostics, and risk simulation.
```

### Product & Community

```text
Crypto trading education, community operations, user workflow design, and risk-aware product decisions.
```

要求：

- Focus areas 必須與 projects 對齊
- 不要寫成泛泛的 skills list
- 可使用 cards、grid 或 compact section
- 必須支援 mobile

---

## 18. Links / Contact Section 要求

必備 links：

```text
LinkedIn:
https://www.linkedin.com/in/kylewu0610/

Email:
itskyle610610@gmail.com

Kaiyn Trading Bot GitHub:
https://github.com/kaiyn-capital/kaiyn-trading-bot

Prediction Market Execution Lab GitHub:
https://github.com/kylekkkk61/prediction-market-execution-lab

Prediction Market Portfolio:
https://pm-lab.kylekkkk.com/

Prediction Market Dashboard:
https://prediction-market-execution-lab-4byaayq2atzengbe26nkfb.streamlit.app/
```

Contact CTA 建議：

```text
For collaboration, fintech research, trading infrastructure, or product discussions, feel free to reach out.
```

Email link 應使用：

```text
mailto:itskyle610610@gmail.com
```

External links 應使用：

```text
target="_blank"
rel="noreferrer"
```

或符合 Next.js / React 最佳實作的安全 external link 處理方式。

---

## 19. Footer / Disclaimer 要求

Footer 應簡潔。

建議內容：

```text
© 2026 Kyle Wu. Built as a personal portfolio for fintech, trading infrastructure, and applied research projects.
```

必要 disclaimer：

```text
Projects shown here are for engineering, research, and portfolio demonstration purposes. Nothing on this site should be interpreted as financial advice or a claim of trading profitability.
```

這句應出現在 footer 或合適位置。  
原因是兩個主要專案都與 trading、crypto、prediction markets 有關。

---

## 20. 頁面與路由要求

必要：

```text
/
```

可選但建議討論：

```text
/projects
/projects/[slug]
```

判斷方式：

- 如果首頁 project cards 已足夠清楚，且每個 project 已有 GitHub / dashboard / portfolio page，可只做首頁。
- 如果希望網站本身承擔完整 case study 展示，則加入 `/projects/[slug]`。
- 若加入 project detail pages，仍需由 data source 或清楚的 content structure 驅動，不得讓內容散落在多個 component 中難以維護。

不管是否加入 detail pages，首頁必須完整可公開，不得依賴「之後再補 project page」才能成立。

---

## 21. 建議檔案結構

可參考：

```text
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/
│       └── [slug]/
│           └── page.tsx          # optional
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── section-container.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── about-section.tsx
│   │   ├── focus-areas-section.tsx
│   │   └── contact-section.tsx
│   ├── project-card.tsx
│   └── ui/
│       └── shadcn components
├── data/
│   ├── projects.ts
│   ├── profile.ts
│   └── links.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── projects/
│   │   └── og/
│   └── favicon files
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

如果 Next.js 初始化版本產生的檔案名稱略有不同，可以接受。  
但必須保持：

- 結構清楚
- 模組化
- 易維護
- 新增專案容易
- 不把資料寫死在 UI component 中

---

## 22. Component 設計原則

### 22.1 Section-based

首頁區塊應獨立成 components：

```text
HeroSection
ProjectsSection
AboutSection
FocusAreasSection
ContactSection
```

### 22.2 Data-driven projects

ProjectCard 不得 hard-code 專案內容。

新增新專案的理想流程：

```text
1. 在 data/projects.ts 新增一個 project object
2. 加入 optional image
3. 設定 featured / order
4. 首頁自動更新
5. 若有 /projects/[slug]，detail page 自動或容易生成
```

### 22.3 shadcn/ui 使用方式

可使用：

- Button
- Card
- Badge
- Separator
- Avatar，optional
- Tooltip，optional
- Sheet，optional for mobile navigation

不要為了使用 shadcn/ui 而堆疊過多元件。  
重點是建立高品質 portfolio UI，而不是展示 component library。

### 22.4 Accessibility

需注意：

- semantic HTML
- 合理 heading hierarchy
- keyboard navigable links/buttons
- visible focus state
- alt text
- sufficient color contrast
- mobile responsive
- external link accessible label if needed

---

## 23. SEO / Metadata 要求

必須加入：

- title
- description
- Open Graph title
- Open Graph description
- Open Graph image
- favicon
- canonical URL，domain 確認後設定
- metadataBase，domain 確認後設定

建議 title：

```text
Kyle Wu — FinTech Builder & Crypto Market Research
```

建議 description：

```text
Personal portfolio of Kyle Wu, focused on fintech systems, crypto trading workflows, execution quality, market microstructure, and risk-aware automation.
```

Open Graph image 可以是簡潔設計圖，但不得使用空白 placeholder。  
若尚未決定最終主視覺，仍需產出可公開使用的 OG image。

---

## 24. Responsive 要求

必須支援：

- desktop
- tablet
- mobile

Mobile 要求：

- Hero 不可過高
- Project cards 單欄堆疊且 spacing 合理
- CTA buttons 不可擠壓
- external links 容易點擊
- section spacing 清楚但不拖沓
- badges 不可造成橫向 overflow
- 不得出現 horizontal scroll
- footer 文字可讀

---

## 25. Performance 要求

目標：

- 靜態或接近靜態頁面
- client-side JS 盡量少
- 能用 server components 的地方使用 server components
- 圖片需合理優化
- 不引入大型無必要第三方 script
- 不使用過重動畫
- 不讓首頁依賴 runtime API fetch

交付前需確認：

```text
pnpm lint
pnpm build
```

都能通過。

---

## 26. 安全與合規邊界

此網站不得公開：

- private key
- API key
- wallet private data
- signer details
- allowance details
- live execution details
- private raw ledger
- private tick raw data
- private strategy-sensitive details
- credential
- deployment secret
- private env values

Trading / crypto / prediction-market 相關內容不得宣稱：

- guaranteed profit
- stable profitability
- alpha that consistently works
- live trading performance
- investment advice
- financial advice
- trading signal recommendation

所有專案描述應保持：

- factual
- conservative
- portfolio-oriented
- research / engineering oriented
- risk-aware

---

## 27. 文案語氣規範

網站文案應：

- 英文
- 專業
- 簡潔
- 清楚
- 不浮誇
- 不像普通履歷模板
- 不使用過度 marketing buzzwords
- 不宣稱未被證明的成果

避免：

```text
I built a profitable trading bot.
I discovered a winning prediction market strategy.
My system generates alpha.
This project proves market inefficiency.
```

可使用：

```text
I built a production-style execution workflow.
I studied whether apparent pricing edge survives execution frictions.
The project focuses on execution quality, risk controls, and public-safe research communication.
```

---

## 28. Design / 美術風格處理方式

本文件不預設最終美術風格。  
Kyle 會使用額外 design skill / instructions 讓 coding agent 優化視覺。

但成品必須符合：

- modern
- clean
- polished
- professional
- fintech / research / developer portfolio feel
- strong section hierarchy
- refined spacing
- responsive
- not over-animated
- not a generic resume template

Coding agent 在開始視覺實作前，必須與 Kyle 討論：

- light / dark / system theme
- typography direction
- card density
- layout hierarchy
- section order
- project card style
- whether to include screenshots
- whether to use subtle motion
- whether to use case-study pages

---

## 29. 實作步驟要求

### Step 1 — Scaffold

建立 Next.js 專案：

- pnpm
- TypeScript
- Tailwind CSS
- App Router
- ESLint

安裝 shadcn/ui。  
加入必要基礎 components。

### Step 2 — Content Data Layer

建立：

```text
data/projects.ts
data/profile.ts
data/links.ts
```

所有可變內容集中到 data files。  
不得把專案資料散落在 UI component 裡。

### Step 3 — Sections

建立首頁 sections：

```text
HeroSection
ProjectsSection
AboutSection
FocusAreasSection
ContactSection
```

### Step 4 — Project Cards

建立可重用 ProjectCard component。

要求：

- 讀取 projects data
- 支援 tags
- 支援 highlights
- 支援 multiple links
- 支援 featured project
- 支援 optional image
- 支援 responsive layout

### Step 5 — Visual Polish

根據 Kyle 確認的美術方向完成完整視覺設計。

要求：

- 不使用 shadcn/ui 預設感過重的未修飾外觀
- section hierarchy 清楚
- spacing 精緻
- typography 有明顯層級
- project cards 有高品質展示感
- mobile layout 完整
- 不使用過度動畫

### Step 6 — SEO / Metadata

加入：

- title
- description
- Open Graph
- favicon
- metadataBase，domain 確認後設定
- canonical，domain 確認後設定

### Step 7 — QA

檢查：

- mobile
- tablet
- desktop
- nav links
- external links
- email link
- project CTA links
- hover / focus states
- build
- lint
- no console error
- no sensitive data
- no profit claims
- no placeholder

### Step 8 — Deployment Readiness

準備 Vercel 部署。

產出：

- GitHub repo
- deployment instructions
- environment notes，若無 env 則明確說明不需要
- custom domain notes
- PR body
- commit / push 指令

---

## 30. README 要求

README 應包含：

```text
# Kyle Wu Personal Portfolio

Personal portfolio website for Kyle Wu, focused on fintech systems, crypto trading workflows, execution quality, market microstructure, and risk-aware automation.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- pnpm
- Vercel

## Local Development

pnpm install
pnpm dev

## Build

pnpm build

## Project Structure

Explain sections, data files, and how to add a new project.

## Adding a New Project

1. Add a new object to data/projects.ts
2. Add optional image to public/images/projects
3. Confirm links and tags
4. Run lint/build
```

README 不得是空泛說明。  
必須讓 Kyle 之後能快速知道如何新增 project。

---

## 31. 驗收標準

交付完成時，必須滿足：

- 首頁可正常瀏覽
- Hero 清楚呈現 Kyle 的定位
- 兩個 selected projects 正確展示
- Project cards 從 data file 產生
- 新增專案流程簡單清楚
- LinkedIn / Email / GitHub / Dashboard links 正確
- 網站內容為英文
- 程式碼模組化
- Responsive layout 正常
- 無 horizontal scroll
- 無明顯 console error
- `pnpm lint` 通過
- `pnpm build` 通過
- 有基本 SEO metadata
- 有 Open Graph metadata
- 有 favicon
- 有 footer disclaimer
- 無敏感資訊
- 無盈利宣稱
- 無 placeholder
- 無 TODO 留在公開頁面
- 視覺呈現達到現代 portfolio site 水準
- 可部署到 Vercel

---

## 32. Coding Agent 開始實作前必須先與 Kyle 討論的事項

Coding agent 閱讀完本文件後，請先列出需要與 Kyle 確認或討論的事項，並提供選項與建議理由。  
Kyle 確認後再開始實作。

請至少討論以下方向，但不限於這些。

### 32.1 技術棧確認

請確認：

- 使用 Next.js 最新穩定版
- 使用 Tailwind CSS v4
- 使用 shadcn/ui
- 是否使用 next-themes
- 是否加入 motion library
- 是否加入 MDX
- 是否加入 `/projects/[slug]`

請提供建議與理由。

### 32.2 部署平台

請比較：

- Vercel
- Railway

根據本專案需求提出建議。

預期建議應偏向 Vercel，除非 coding agent 發現 Kyle 有 backend / long-running service 需求。

### 32.3 網站資訊架構

請確認首頁區塊順序：

```text
Hero
Selected Projects
About
Focus Areas
Contact
Footer
```

並討論是否需要加入：

- Experience timeline
- Resume download
- Project detail pages
- Screenshots / demo images
- GitHub profile section

### 32.4 專案展示方式

請詢問 Kyle：

- Project cards 要 compact 還是 detailed
- 是否加入 screenshots
- 是否加入每個 project 的 selected metrics / highlights
- Prediction Market Dashboard 要 external link 還是 embed
- Kaiyn Trading Bot 是否有 demo link，若沒有則只放 GitHub
- 是否需要每個 project 的 detail page

### 32.5 美術與排版

請提出可選方向，但不要強制：

- light only
- dark only
- system theme
- minimal fintech
- editorial research
- founder portfolio
- developer terminal-inspired
- dashboard-inspired

每個方向請簡短說明優缺點。

### 32.6 內容文案

請詢問 Kyle 是否接受以下 hero positioning：

```text
I build applied fintech systems and market-structure research projects across crypto trading workflows, execution quality, and risk-aware automation.
```

若 coding agent 有更好的英文文案，請提出 3 個選項並說明語氣差異。

### 32.7 Domain

請確認 production domain：

```text
kylekkkk.com
www.kylekkkk.com
portfolio.kylekkkk.com
其他
```

並確認：

```text
pm-lab.kylekkkk.com
```

是否維持作為 Prediction Market Execution Lab 的 project-specific site。

### 32.8 PR 拆分

請提出建議 PR 拆分方式，例如：

```text
PR 1: feat: scaffold portfolio website
PR 2: feat: add modular portfolio content system
PR 3: feat: add polished responsive sections
PR 4: feat: add SEO metadata and deployment readiness
```

若 coding agent 建議合併成一個 PR，也需說明原因。

---

## 33. 最終交付提醒

此專案的價值是建立一個可信、清楚、好看、可擴充的個人入口。

優先級：

```text
Clarity > Credibility > Visual polish > Extensibility > Fancy effects
```

網站必須快速回答訪客三個問題：

```text
Who is Kyle?
What has Kyle built?
Why is this relevant to fintech / trading / research?
```

請以完整可上線的正式 personal portfolio website 為交付標準，不要提交半成品。
