import { Link } from "wouter"
import { Clock } from "lucide-react"

export const MARKET_INSIGHTS = [
  {
    title: "What Is Market Cap and Why Does It Matter?",
    excerpt:
      "Market capitalization is one of the most reliable indicators of a cryptocurrency's size and stability. Here's how to read it correctly.",
    category: "Fundamentals",
    readingTime: "3 min read",
    body: [
      "Market cap is calculated by multiplying the current price of a coin by its circulating supply. A $50,000 coin with 1 million coins in circulation has a market cap of $50 billion.",
      "Large-cap cryptocurrencies (above $10B) tend to be more stable, more liquid, and more widely held by institutional investors. They are less likely to lose 80% of their value overnight.",
      "Small-cap coins carry higher risk and higher reward potential. They can double or triple in days — but they can also collapse just as fast. Always compare market cap alongside volume and supply scarcity before investing.",
    ],
  },
  {
    title: "How to Compare Trading Volume Against Market Cap",
    excerpt:
      "A high volume-to-market-cap ratio signals strong interest. A low ratio might mean low liquidity — or a sleeping giant.",
    category: "Analysis",
    readingTime: "4 min read",
    body: [
      "The volume-to-market-cap ratio (sometimes called 'turnover ratio') divides 24-hour trading volume by total market cap. A ratio above 10% often signals elevated activity, either speculative buying or major news.",
      "Ratios below 1% on a smaller coin can mean low liquidity — large buy or sell orders can move the price dramatically. This is a hidden risk many retail investors ignore.",
      "When comparing two coins, a coin with higher relative volume is being actively traded, which generally means tighter bid-ask spreads and faster price discovery. Lower-volume coins can be manipulated more easily.",
    ],
  },
  {
    title: "Why ATH Drawdown Reveals Hidden Risk",
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
