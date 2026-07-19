import { notFound } from "next/navigation"
import Image from "next/image"
import { Check, AlertCircle } from "lucide-react"
import type { Metadata } from "next"
import { getCoinMarket } from "@/lib/coingecko/api"
import { parseComparisonSlug } from "@/lib/constants"
import { analyzeComparison } from "@/lib/analysis"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSlot } from "@/components/ad-slot"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const parsed = parseComparisonSlug(slug)
  if (!parsed) return {}

  const [coinA, coinB] = await Promise.all([
    getCoinMarket(parsed.a),
    getCoinMarket(parsed.b),
  ])
  if (!coinA || !coinB) return {}

  return {
    title: `${coinA.name} vs ${coinB.name} Side-by-Side Comparison`,
    description: `Compare ${coinA.name} and ${coinB.name} prices, market caps, trading volume, performance, and supply scarcity with live metrics and scoring.`,
  }
}

export default async function CompareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const parsed = parseComparisonSlug(slug)
  if (!parsed) notFound()

  const [coinA, coinB] = await Promise.all([
    getCoinMarket(parsed.a),
    getCoinMarket(parsed.b),
  ])
  if (!coinA || !coinB) notFound()

  const analysis = analyzeComparison(coinA, coinB)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Compare", href: "/compare" },
          { label: `${coinA.name} vs ${coinB.name}`, href: `/compare/${slug}` },
        ]}
      />

      {/* Comparison Score Card */}
      <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start">
          <div className="text-center">
            <Image
              src={coinA.image || "/placeholder.svg"}
              alt={coinA.name}
              width={48}
              height={48}
              className="rounded-full mx-auto"
              unoptimized
            />
            <p className="mt-2 font-semibold text-foreground text-sm">{coinA.name}</p>
            <p className="text-3xl font-extrabold text-primary mt-1">{analysis.scoreA}</p>
          </div>
          <span className="text-xl font-bold text-muted-foreground">VS</span>
          <div className="text-center">
            <Image
              src={coinB.image || "/placeholder.svg"}
              alt={coinB.name}
              width={48}
              height={48}
              className="rounded-full mx-auto"
              unoptimized
            />
            <p className="mt-2 font-semibold text-foreground text-sm">{coinB.name}</p>
            <p className="text-3xl font-extrabold text-primary mt-1">{analysis.scoreB}</p>
          </div>
        </div>

        <div className="text-center md:text-right space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {analysis.isTie ? (
              <span>Matchup is a tie!</span>
            ) : (
              <span>{analysis.winner.name} holds the advantage</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            Scored across {analysis.metrics.length} distinct tokenomics and momentum indicators.
          </p>
        </div>
      </div>

      <AdSlot format="horizontal" slotId="compare-top" />

      {/* Metrics breakdown */}
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="border-b border-border px-6 py-4">
              <h2 className="font-bold text-foreground">Scoring Breakdown</h2>
            </div>
            <div className="divide-y divide-border">
              {analysis.metrics.map((m, i) => (
                <div key={i} className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground text-sm">{m.label}</h3>
                    <div className="text-xs font-semibold">
                      {m.winner === "a" ? (
                        <span className="text-success">{coinA.name} Advantage</span>
                      ) : m.winner === "b" ? (
                        <span className="text-success">{coinB.name} Advantage</span>
                      ) : (
                        <span className="text-muted-foreground">Tie</span>
                      )}
                    </div>
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

          <AdSlot format="rectangle" slotId="compare-sidebar" />
        </div>
      </div>

      <AdSlot format="horizontal" slotId="compare-bottom" />
    </div>
  )
}
