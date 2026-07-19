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
          Welcome to <strong>{SITE.name}</strong>, a crypto research hub built to make digital asset comparison clearer, more practical, and easier to understand. Instead of burying readers in raw tables, we turn live market data into side-by-side context that helps people evaluate projects with more confidence.
        </p>

        <h2 className="mt-8 text-xl font-bold text-foreground">
          Our Mission
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          The cryptocurrency market moves incredibly fast, with thousands of projects and endless raw data. Comparing these assets manually is time-consuming and often confusing. {SITE.name} changes that by bringing together real-time prices, supply metrics, and performance indicators in a format that is useful for both beginners and experienced readers.
        </p>

        <h2 className="mt-8 text-xl font-bold text-foreground">
          What You’ll Find Here
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li>• Clear side-by-side comparisons for major assets and emerging tokens.</li>
          <li>• Practical explanations of market cap, trading volume, supply, and recent momentum.</li>
          <li>• Educational articles that help readers interpret the market instead of just scrolling past charts.</li>
        </ul>

        <h2 className="mt-8 text-xl font-bold text-foreground">
          How We Work
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          We use data from the leading independent cryptocurrency aggregator, <strong>CoinGecko</strong>, ensuring that the market prices, trading volumes, and capitalization numbers you see are verified and accurate. Our comparisons also highlight structural signals such as capped supply and recent drawdowns so you can judge risk and opportunity more clearly.
        </p>

        <h2 className="mt-8 text-xl font-bold text-foreground">
          Common Questions
        </h2>
        <div className="mt-3 space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground">Why compare cryptocurrencies at all?</p>
            <p className="mt-1">Because price alone rarely tells the full story. Comparing market cap, volume, supply, and volatility gives you a more balanced view of where an asset stands.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Is this site suitable for beginners?</p>
            <p className="mt-1">Yes. The goal is to make complex market data easier to interpret with plain-language context and useful summaries.</p>
          </div>
        </div>

        <h2 className="mt-8 text-xl font-bold text-foreground">
          Contact Us
        </h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Have feedback, questions, or ideas for new comparison metrics? We'd love to hear from you. Visit our <a href="/contact" className="text-primary hover:underline">Contact Page</a> to get in touch.
        </p>
      </div>
    </div>
  )
}
