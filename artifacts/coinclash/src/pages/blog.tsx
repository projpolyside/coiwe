import { Link } from "wouter"
import { Clock, Calendar, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const BLOG_POSTS = [
  {
    title: "How to Compare Cryptocurrencies Effectively",
    slug: "how-to-compare-cryptocurrencies",
    date: "July 3, 2026",
    excerpt:
      "A comprehensive guide to evaluating digital assets beyond price action.",
    readTime: "8 min",
  },
  {
    title: "Why Market Cap Matters in Crypto Investing",
    slug: "why-market-cap-matters",
    date: "July 2, 2026",
    excerpt:
      "Understanding total value, fully diluted valuation, and market dynamics.",
    readTime: "7 min",
  },
]

export function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      <SectionHeading
        title="Crypto Insights Blog"
        subtitle="Educational articles to help you navigate the cryptocurrency market."
      />

      <div className="space-y-4 mt-8">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary/40"
          >
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime} read
              </span>
            </div>
            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
              Read article <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
