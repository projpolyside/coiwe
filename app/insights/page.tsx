import type { Metadata } from "next"
import { MarketInsights } from "@/components/home/market-insights"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Cryptocurrency Educational Insights & Guides",
  description: "Read plain-English educational guides explaining crypto metrics, market capitalization, volatility, and token dilution.",
}

export default function InsightsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Market Insights"
        subtitle="Plain-English articles and guides to help you understand the data and concepts behind cryptocurrency comparisons."
      />
      <div className="mt-8">
        <MarketInsights />
      </div>
    </div>
  )
}
