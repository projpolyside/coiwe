import type { Metadata } from "next"
import { getMarkets } from "@/lib/coingecko/api"
import { CoinTable } from "@/components/coin-table"
import { SectionHeading } from "@/components/section-heading"

export const revalidate = 300 // Cache for 5 minutes

export const metadata: Metadata = {
  title: "Cryptocurrency Prices & Market Capitalizations",
  description: "View live prices, 24h & 7d changes, market caps, and trading volume for the top 100 cryptocurrencies.",
}

export default async function CoinsPage() {
  const coins = await getMarkets(1, 100)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Top Cryptocurrencies"
        subtitle="Live prices, 24h & 7d changes, and market caps for the top 100 digital assets."
      />
      <div className="mt-8">
        <CoinTable coins={coins} />
      </div>
    </div>
  )
}
