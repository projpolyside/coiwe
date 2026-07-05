import { Link } from "wouter"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { SITE } from "@/lib/constants"

export function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="rounded-2xl border border-border bg-card p-8 md:p-12 space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Disclaimer
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: July 5, 2026</p>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-5">
          <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Important:</strong> Cryptocurrency investments are highly volatile and involve significant risk. Past performance is not indicative of future results.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">General Information Only</h2>
            <p>
              The information provided on {SITE.name} is for educational and informational purposes only. It does not constitute financial, investment, legal, or tax advice. You should consult with a qualified professional before making any investment decisions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">No Investment Recommendations</h2>
            <p>
              {SITE.name} does not recommend buying, selling, or holding any cryptocurrency. All comparisons and scores are generated algorithmically based on public data and are subject to change.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">Data Sources</h2>
            <p>
              Market data is provided by CoinGecko. While we strive for accuracy, we do not guarantee the completeness or timeliness of the information. Prices can fluctuate rapidly.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">Risk Acknowledgment</h2>
            <p>
              You may lose some or all of your invested capital. Cryptocurrencies are not suitable for all investors. Always do your own research (DYOR).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-foreground">Affiliate Disclosure</h2>
            <p>
              Some links on this site may be affiliate links. We may earn a small commission at no extra cost to you. This does not influence our editorial content or comparisons.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
