import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${SITE.name} and our mission to simplify cryptocurrency research.`,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          About {SITE.name}
        </h1>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          Welcome to <strong>{SITE.name}</strong>, your ultimate destination for side-by-side cryptocurrency comparison. Our goal is to make digital asset research accessible, transparent, and easy to understand for everyone, from beginners to experienced traders.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8">
          Our Mission
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          The cryptocurrency market moves incredibly fast, with thousands of projects and endless raw data. Comparing these assets manually is time-consuming and often confusing. {SITE.name} changes that by pulling real-time price, supply, and volume metrics directly into side-by-side match-ups, adding clear explanations and verdicts so you can understand the data instantly.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8">
          How We Work
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          We use data from the leading independent cryptocurrency aggregator, <strong>CoinGecko</strong>, ensuring that the market prices, trading volumes, and capitalization numbers you see are verified and accurate. Our comparison scoring analyzes structural indicators (like capped supplies) and momentum signals (like recent drawdowns) to help you see where each asset holds an advantage.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-8">
          Contact Us
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Have feedback, questions, or ideas for new comparison metrics? We'd love to hear from you. Visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a> to get in touch.
        </p>
      </div>
    </div>
  )
}
