import Link from "next/link"
import { Clock } from "lucide-react"

export interface Insight {
  title: string
  excerpt: string
  body: string[]
  category: string
  readingTime: string
}

export const MARKET_INSIGHTS: Insight[] = [
  {
    title: "How to Read a Crypto Comparison the Right Way",
    excerpt:
      "Market cap, volume, and supply each tell a different part of the story. Here's how to weigh them.",
    category: "Education",
    readingTime: "4 min read",
    body: [
      "When you compare two cryptocurrencies, it is tempting to focus only on price. But a single coin's price is largely meaningless without context — a token priced at a few cents can be worth more in aggregate than one priced in the thousands, depending on how many units exist.",
      "Market capitalization is the better starting point because it multiplies price by circulating supply, giving you a sense of the asset's total size. Larger market caps tend to come with deeper liquidity and lower relative volatility, which matters if you ever need to enter or exit a position quickly.",
      "Trading volume reveals how actively an asset changes hands. Supply metrics — circulating, total, and maximum — tell you about future dilution and scarcity. Reading these together, rather than in isolation, is what separates a thoughtful comparison from a superficial one.",
    ],
  },
  {
    title: "Market Cap vs. Fully Diluted Valuation: Why the Gap Matters",
    excerpt:
      "Two projects can look similar today yet have very different futures once all tokens unlock.",
    category: "Analysis",
    readingTime: "5 min read",
    body: [
      "Market capitalization measures only the tokens currently in circulation. Fully diluted valuation (FDV) projects what the market cap would be if every token that will ever exist were already trading. The gap between the two is a direct signal of future supply inflation.",
      "A project with a large gap between market cap and FDV may face sustained selling pressure as locked tokens vest and enter the market. Conversely, an asset with most of its supply already circulating has less hidden dilution risk.",
      "This is one of the most overlooked factors in comparing assets. Always check whether a coin's max supply is capped, and how much of it is already live, before drawing conclusions about its long-term value.",
    ],
  },
  {
    title: "Understanding Volatility and Drawdowns From All-Time Highs",
    excerpt:
      "How far an asset sits below its peak can reveal resilience — or fragility.",
    category: "Risk",
    readingTime: "4 min read",
    body: [
      "Every crypto asset has an all-time high (ATH) and an all-time low (ATL). The distance between the current price and the ATH — the drawdown — is a quick proxy for how much pain holders have endured and how much recovery may remain.",
      "A smaller drawdown can indicate stronger demand and a more resilient holder base. A very deep drawdown is not automatically bad; it can signal either a structurally weak project or a discounted entry point for a fundamentally sound one.",
      "The key is to pair drawdown data with liquidity, adoption, and the project's roadmap. Volatility is the price of admission in crypto — understanding it is how you manage risk rather than be surprised by it.",
    ],
  },
  {
    title: "Tokenomics Checklist: What to Look For",
    excerpt:
      "A short checklist to evaluate token supply, vesting schedules, and incentives before you compare projects.",
    category: "Tokenomics",
    readingTime: "5 min read",
    body: [
      "Token supply distribution and vesting schedules are among the most important but overlooked factors in crypto comparisons. Look for concentration of tokens with founders or early investors and whether large unlocks are scheduled soon.",
      "Check total supply vs circulating supply — a large difference can mean future dilution. Also consider token utility: is the token required for a meaningful on-chain function, or is it primarily speculative?",
      "A simple checklist: 1) circulating vs total supply, 2) scheduled unlocks/vesting, 3) token utility, 4) on-chain holder distribution, 5) burn mechanisms or deflationary policies. Use this when comparing two assets to understand long-term structural risk.",
    ],
  },
  {
    title: "Adoption Metrics That Actually Matter",
    excerpt:
      "Not all activity is equal — measure adoption with meaningful on-chain and off-chain signals.",
    category: "Analysis",
    readingTime: "5 min read",
    body: [
      "Daily active addresses, developer activity, and real transaction volume are stronger signals than token transfers between exchanges. Look for sustained growth across multiple metrics rather than a single spike.",
      "Social metrics can be noisy; pair them with on-chain data and exchange flows. Rising developer activity and integrations often precede more durable adoption than short-term social attention.",
      "When comparing two projects, weigh adoption signals along with liquidity and market structure — a popular token with weak on-chain usage can still be fragile during a market downturn.",
    ],
  },
  {
    title: "How to Spot Rug Pulls and Scam Tokens Safely",
    excerpt:
      "High-level red flags and hygiene checks to protect yourself when researching new tokens.",
    category: "Safety",
    readingTime: "4 min read",
    body: [
      "Absolute certainty is impossible, but there are clear red flags: anonymous teams with no verifiable roadmap, impossible tokenomics, and liquidity that can be removed by a single wallet.",
      "Check whether liquidity is locked, whether the contract has ownership renounced, and whether the token's website and codebase are transparent. Large single-owner wallets and sudden liquidity movements are common scam signs.",
      "Use basic hygiene: verify contracts on explorers, read community discussions critically, and prefer projects with transparent teams and visible integrations. These checks make comparisons safer and more useful.",
    ],
  },
  {
    title: "A Practical Guide to Comparing Cryptocurrencies",
    excerpt:
      "A step-by-step framework to compare digital assets, weigh risk, and spot durable projects — with examples and a checklist you can use immediately.",
    category: "Guide",
    readingTime: "10 min read",
    body: [
      "Comparing cryptocurrencies well is more than looking at price charts. Good comparisons combine structural metrics (market cap, supply), usage signals (volume, active addresses), and risk measures (drawdowns, concentration). This guide walks through a repeatable framework you can apply to any pair of assets.",
      "Step 1 — Define the question. Are you comparing for long-term investment, short-term trading, or product functionality? Your objective changes which metrics matter: product adoption and developer activity matter more for long-term value, while volatility and liquidity matter more for trading.",
      "Step 2 — Check market structure. Market capitalization and circulating supply show the relative size of an asset; compare market cap to understand scale. A token priced low but with massive circulating supply can represent a larger market presence than a high-priced token with tiny supply.",
      "Step 3 — Measure liquidity and volume. Trading volume and number of active markets indicate whether you can enter or exit positions without large slippage. Low liquidity makes even a well-known token risky during stress.",
      "Step 4 — Review tokenomics. Look for capped supply, vesting schedules, and ownership concentration. A large portion of tokens held by a few wallets or scheduled unlocks can create significant future selling pressure.",
      "Step 5 — Adoption signals. Developer activity (commits, forks), real transaction volume, integrations, and partnerships are stronger signs of durable adoption than social metrics alone. Check GitHub, etherscan-like explorers, and API integrations where possible.",
      "Step 6 — Risk indicators. Compare drawdowns from ATH, volatility, and on-chain concentration. Also watch for signs of wash trading or exchange-only transfers that inflate perceived activity.",
      "Step 7 — Narrative and roadmap. Understand what problem each project claims to solve and whether the token’s utility aligns with that solution. A clear, credible roadmap with measurable milestones supports adoption.",
      "Step 8 — External signals. Audit history, security incidents, and regulatory posture matter. Projects with past hacks or unclear governance carry additional risk even if metrics look good.",
      "Practical checklist (use this when building a head-to-head): 1) Market cap & rank; 2) Circulating vs total supply; 3) 24h & 7d volume; 4) Liquidity pool sizes; 5) Developer activity; 6) Large wallet concentration; 7) Upcoming token unlocks; 8) Recent drawdown; 9) Contract audits; 10) Real-world integrations.",
      "Example: When comparing Token A (large market cap, low daily volume) vs Token B (smaller market cap, higher relative volume), Token A may look safer at first glance but could be illiquid. Use volume and liquidity alongside market cap to understand true tradability.",
      "How to present your conclusion: summarize the dominant advantages for each asset (e.g., ‘Token A: deep liquidity, strong treasury; Token B: faster adoption, higher short-term volatility’), then give a short, actionable verdict tied to the user’s objective (long-term hold vs short-term trade).",
      "This framework encourages evidence-based comparisons rather than relying on headlines or social sentiment. Apply it consistently and update your notes as new on-chain or fundamental data appears.",
      "Further reading: check the tokenomics checklist and adoption metrics insights for deeper dives on specific signals to track.",
    ],
  },
]

export function insightSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function MarketInsights() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {MARKET_INSIGHTS.map((insight) => (
        <Link
          key={insight.title}
          href={`/insights/${insightSlug(insight.title)}`}
          className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
        >
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-md bg-secondary px-2 py-0.5 font-medium text-foreground">
              {insight.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {insight.readingTime}
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
            {insight.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {insight.excerpt}
          </p>
          <span className="mt-4 text-sm font-medium text-primary">
            Read article →
          </span>
        </Link>
      ))}
    </div>
  )
}
