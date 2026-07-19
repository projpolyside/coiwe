import { useEffect, useState } from "react"
import { getMarkets } from "@/lib/coingecko/api"
import { CoinTable } from "@/components/coin-table"
import { SectionHeading } from "@/components/section-heading"
import type { MarketCoin } from "@/lib/coingecko/types"

export function CoinsPage() {
  const [coins, setCoins] = useState<MarketCoin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMarkets(1, 100)
      .then((data) => setCoins(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Top Cryptocurrencies"
        subtitle="Live prices, 24h & 7d changes, and market caps for the top 100 digital assets."
      />
      <div className="mt-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : (
          <CoinTable coins={coins} />
        )}
      </div>
    </div>
  )
}
