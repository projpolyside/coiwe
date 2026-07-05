import { Link } from "wouter"
import { ArrowLeft } from "lucide-react"

export function EditorialPolicyPage() {
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
            Editorial Policy
          </h1>
          <p className="mt-2 text-base text-muted-foreground">
            Our commitment to transparency and accuracy.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Coin Selection Criteria</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We include cryptocurrencies that meet minimum liquidity thresholds (typically $1M+ 24h volume) and have verifiable on-chain activity.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Scoring Methodology</h2>
          <div className="rounded-xl border border-border bg-secondary/30 p-6">
            <p className="text-sm font-semibold text-foreground mb-4">
              Our composite score is calculated using weighted factors:
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Market Metrics (Market Cap, Volume, Liquidity)</span>
                <span className="font-bold text-foreground">40%</span>
              </li>
              <li className="flex justify-between">
                <span>Technical Strength (Code activity, Security, Scalability)</span>
                <span className="font-bold text-foreground">25%</span>
              </li>
              <li className="flex justify-between">
                <span>Adoption &amp; Utility</span>
                <span className="font-bold text-foreground">20%</span>
              </li>
              <li className="flex justify-between">
                <span>Community &amp; Governance</span>
                <span className="font-bold text-foreground">15%</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Transparency Standards</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            All data sources are publicly disclosed. Sponsored content is clearly labeled. We do not accept payment for rankings or positive coverage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Corrections Policy</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you spot an error, please{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            . Factual corrections are published promptly with a revision note.
          </p>
        </section>
      </div>
    </div>
  )
}
