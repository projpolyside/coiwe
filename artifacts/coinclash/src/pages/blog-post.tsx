import { useParams } from "wouter"
import { Link } from "wouter"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { BLOG_POSTS } from "./blog"

type BlogPostContent = {
  slug: string
  date: string
  readTime: string
  title: string
  intro: string
  sections: { heading: string; body: string }[]
  callout?: string
  footer?: string
}

const BLOG_CONTENT: BlogPostContent[] = [
  {
    slug: "how-to-compare-cryptocurrencies",
    date: "July 3, 2026",
    readTime: "8 min",
    title: "How to Compare Cryptocurrencies Effectively",
    intro:
      "With thousands of cryptocurrencies available, knowing how to compare them is essential for making informed investment decisions.",
    sections: [
      {
        heading: "1. Look Beyond Price",
        body: "Price alone tells you very little. A $0.01 coin with a $10 billion market cap may be more \"expensive\" in relative terms than a $500 coin with a smaller market cap. Understanding this distinction is crucial for evaluating true value.",
      },
      {
        heading: "2. Market Capitalization Analysis",
        body: "Market cap gives you a sense of the project's overall size and adoption level. Compare circulating vs fully diluted valuation (FDV) to understand potential dilution risks. A large gap between these two numbers signals future selling pressure.",
      },
      {
        heading: "3. Liquidity and Volume",
        body: "High trading volume relative to market cap indicates healthy interest and easier entry/exit. Low liquidity assets carry higher slippage risk and may be difficult to sell quickly.",
      },
      {
        heading: "4. Technology and Use Case",
        body: "Evaluate the problem the project solves and whether it has a real-world use case. Review whitepapers, GitHub activity, and partnerships to understand technical merit.",
      },
      {
        heading: "5. Team and Transparency",
        body: "Do the founders have a public presence? Are smart contracts audited? These factors significantly impact long-term viability and investor confidence.",
      },
    ],
    callout:
      "Pro Tip: Use CoinClash to quickly compare multiple coins across standardized metrics instead of manually checking each one.",
    footer:
      "Effective comparison requires looking at multiple dimensions simultaneously. Bookmark this guide and return as you build your portfolio.",
  },
  {
    slug: "why-market-cap-matters",
    date: "July 2, 2026",
    readTime: "7 min",
    title: "Why Market Cap Matters in Crypto Investing",
    intro:
      "Market capitalization is one of the most important metrics when evaluating cryptocurrencies, yet many new investors overlook its significance.",
    sections: [
      {
        heading: "What is Market Cap?",
        body: "Market capitalization is calculated by multiplying the current price by the circulating supply. It represents the total market value of all coins in circulation.",
      },
      {
        heading: "Market Cap Categories",
        body: "Large Cap (>$10B): Generally more stable, established projects with proven track records. Mid Cap ($1B–$10B): Balance of growth potential and risk, more volatile than large cap. Small Cap (<$1B): Higher risk, higher reward potential, prone to volatility and speculation.",
      },
      {
        heading: "Fully Diluted Valuation (FDV)",
        body: "FDV shows what the market cap would be if all tokens were released. A large gap between market cap and FDV signals future selling pressure and potential price impact.",
      },
      {
        heading: "Why It Matters for Investors",
        body: "A smaller market cap project needs less capital inflow to achieve significant price appreciation. However, they also tend to be more volatile and prone to manipulation. Understanding this helps you size positions appropriately.",
      },
    ],
    footer:
      "Always compare market cap in context with other metrics like trading volume and utility to get the complete picture of a cryptocurrency's potential.",
  },
]

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const meta = BLOG_POSTS.find((p) => p.slug === slug)
  const content = BLOG_CONTENT.find((p) => p.slug === slug)

  if (!meta || !content) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <p className="text-muted-foreground">Article not found.</p>
        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 text-sm text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <article className="rounded-2xl border border-border bg-card p-6 md:p-10 space-y-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {content.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {content.readTime} read
          </span>
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          {content.title}
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground">
          {content.intro}
        </p>

        <div className="space-y-6 border-t border-border pt-6">
          {content.sections.map((s, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">{s.heading}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        {content.callout && (
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted-foreground">
            <strong className="text-foreground">Pro Tip:</strong>{" "}
            {content.callout.replace(/^Pro Tip: /, "")}
          </div>
        )}

        {content.footer && (
          <p className="text-sm leading-relaxed text-muted-foreground border-t border-border pt-4">
            {content.footer}
          </p>
        )}
      </article>
    </div>
  )
}
