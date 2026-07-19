import { useParams, useLocation, Link } from "wouter"
import { ArrowLeft, Clock } from "lucide-react"
import { MARKET_INSIGHTS, insightSlug } from "@/components/home/market-insights"

export function InsightDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const insight = MARKET_INSIGHTS.find((i) => insightSlug(i.title) === slug)

  if (!insight) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <p className="text-muted-foreground">Article not found.</p>
        <Link href="/insights" className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to Insights
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      <Link
        href="/insights"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Insights
      </Link>

      <article className="rounded-2xl border border-border bg-card p-6 md:p-10 space-y-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-md bg-secondary px-2 py-0.5 font-medium text-foreground">
            {insight.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {insight.readingTime}
          </span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {insight.title}
        </h1>

        <p className="text-lg font-medium text-muted-foreground leading-relaxed">
          {insight.excerpt}
        </p>

        <div className="border-t border-border pt-6 space-y-4 text-muted-foreground leading-relaxed">
          {insight.body.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
