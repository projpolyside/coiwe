import { useEffect, useState } from "react"
import { useParams, useLocation } from "wouter"
import { Check, AlertCircle } from "lucide-react"
import { getCoinMarket } from "@/lib/coingecko/api"
import { parseComparisonSlug } from "@/lib/constants"
import { analyzeComparison } from "@/lib/analysis"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { MarketCoin } from "@/lib/coingecko/types"
import type { ComparisonAnalysis } from "@/lib/analysis"

export function CompareDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [, setLocation] = useLocation()
  const [coinA, setCoinA] = useState<MarketCoin | null>(null)
  const [coinB, setCoinB] = useState<MarketCoin | null>(null)
  const [analysis, setAnalysis] = useState<ComparisonAnalysis | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    const parsed = parseComparisonSlug(slug)
    if (!parsed) {
      setLocation("/compare")
      return
    }
    setLoading(true)
    Promise.all([getCoinMarket(parsed.a), getCoinMarket(parsed.b)])
      .then(([a, b]) => {
        if (!a || !b) {
          setLocation("/compare")
          return
        }
        setCoinA(a)
        setCoinB(b)
        setAnalysis(analyzeComparison(a, b))
      })
      .catch(() => setLocation("/compare"))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  if (!coinA || !coinB || !analysis) return null

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Compare", href: "/compare" },
          { label: `${coinA.name} vs ${coinB.name}`, href: `/compare/${slug}` },
        ]}
      />

      {/* Score Card */}
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start">
          <div className="text-center">
            <img
              src={coinA.image || "/placeholder.svg"}
              alt={coinA.name}
              width={48}
              height={48}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-semibold text-foreground text-sm">{coinA.name}</p>
            <p className="text-3xl font-extrabold text-primary mt-1">{analysis.scoreA}</p>
          </div>
          <span className="text-xl font-bold text-muted-foreground">VS</span>
          <div className="text-center">
            <img
              src={coinB.image || "/placeholder.svg"}
              alt={coinB.name}
              width={48}
              height={48}
              className="rounded-full mx-auto"
            />
            <p className="mt-2 font-semibold text-foreground text-sm">{coinB.name}</p>
            <p className="text-3xl font-extrabold text-primary mt-1">{analysis.scoreB}</p>
          </div>
        </div>
        <div className="flex-1 max-w-md text-center md:text-left">
          <p className="text-sm font-medium text-muted-foreground">
            {analysis.isTie
              ? "It's a tie! Both coins are evenly matched."
              : `${analysis.winner.name} wins ${Math.max(analysis.scoreA, analysis.scoreB)}–${Math.min(analysis.scoreA, analysis.scoreB)}`}
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Metrics */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground">Head-to-Head Breakdown</h2>
          <div className="space-y-3">
            {analysis.metrics.map((m, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{m.label}</h3>
                  <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                    m.winner === "tie"
                      ? "bg-secondary text-muted-foreground"
                      : "bg-success/10 text-success"
                  }`}>
                    {m.winner === "tie" ? "Tie" : m.winner === "a" ? coinA.name : coinB.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{m.description}</p>
                <div className="grid grid-cols-2 gap-4 pt-1 text-sm">
                  <div className={`rounded-lg p-2.5 border ${m.winner === "a" ? "border-success/30 bg-success/5 text-success font-medium" : "border-border bg-secondary/10 text-muted-foreground"}`}>
                    <p className="text-[10px] uppercase text-muted-foreground/60">{coinA.name}</p>
                    <p className="mt-1">{m.aDisplay}</p>
                  </div>
                  <div className={`rounded-lg p-2.5 border ${m.winner === "b" ? "border-success/30 bg-success/5 text-success font-medium" : "border-border bg-secondary/10 text-muted-foreground"}`}>
                    <p className="text-[10px] uppercase text-muted-foreground/60">{coinB.name}</p>
                    <p className="mt-1">{m.bDisplay}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Verdict Sidebar */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-bold text-foreground flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-primary" />
              Written Verdict
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {analysis.verdict}
            </p>
            <div className="border-t border-border pt-4 space-y-3">
              <h4 className="text-xs font-bold uppercase text-foreground">Key Highlights</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {analysis.highlights.map((h, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-3 w-3 text-success mt-0.5 shrink-0" />
                    <span className="leading-normal">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
