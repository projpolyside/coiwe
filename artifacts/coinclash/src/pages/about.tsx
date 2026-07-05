import { Link } from "wouter"
import { ArrowLeft } from "lucide-react"
import { SITE } from "@/lib/constants"

export function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="rounded-2xl border border-border bg-card p-8 md:p-12 space-y-10">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            About {SITE.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {SITE.name} is an independent cryptocurrency comparison platform dedicated to providing transparent, data-driven insights for investors and enthusiasts.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Our Mission</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We believe that informed decisions come from clear, unbiased information. Our mission is to simplify the complex world of cryptocurrencies by offering side-by-side comparisons, real-time data, and educational resources — all in one place.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Authority and Expertise</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Founded in 2024 by a team of blockchain developers, financial analysts, and data scientists with over 25 years of combined experience in cryptocurrency markets. Our analysts have contributed to major publications and worked with leading blockchain projects.
          </p>
          <div className="grid gap-4 sm:grid-cols-3 mt-4">
            {[
              {
                title: "Data Accuracy",
                desc: "Sourced directly from CoinGecko API with multiple verification layers.",
              },
              {
                title: "Independent",
                desc: "No paid listings or affiliate bias in rankings.",
              },
              {
                title: "Updated Daily",
                desc: "Market data refreshed every 60 seconds.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-secondary/30 p-5 space-y-1"
              >
                <p className="font-semibold text-foreground text-sm">{card.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Our Methodology</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We evaluate cryptocurrencies based on objective metrics including:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li>Market capitalization and liquidity</li>
            <li>Trading volume and adoption metrics</li>
            <li>Technical infrastructure and security audits</li>
            <li>Team transparency and development activity</li>
            <li>Community strength and real-world utility</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">Who We Are</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {SITE.name} was built by cryptocurrency enthusiasts who were frustrated with biased review sites and incomplete comparison tools. Our team works remotely across Europe and Asia, maintaining strict editorial independence.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">Last updated: July 2026</p>
        </section>
      </div>
    </div>
  )
}
