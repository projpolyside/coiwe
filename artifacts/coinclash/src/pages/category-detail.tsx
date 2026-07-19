import { useEffect, useState } from "react"
import { useParams, useLocation } from "wouter"
import { getCoinsByCategory } from "@/lib/coingecko/api"
import { FEATURED_CATEGORIES } from "@/lib/constants"
import { CoinTable } from "@/components/coin-table"
import { SectionHeading } from "@/components/section-heading"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { MarketCoin } from "@/lib/coingecko/types"

export function CategoryDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [, setLocation] = useLocation()
  const [coins, setCoins] = useState<MarketCoin[]>([])
  const [loading, setLoading] = useState(true)

  const cat = FEATURED_CATEGORIES.find((c) => c.id === id)

  useEffect(() => {
    if (!id) return
    if (!cat) {
      setLocation("/categories")
      return
    }
    setLoading(true)
    getCoinsByCategory(id, 50)
      .then((data) => setCoins(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [id])

  if (!cat) return null

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: cat.name, href: `/category/${cat.id}` },
        ]}
      />

      <SectionHeading title={`${cat.name} Coins`} subtitle={cat.blurb} />

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      ) : coins.length > 0 ? (
        <div className="mt-8">
          <CoinTable coins={coins} />
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
          No coins found in this category. Please check back later.
        </div>
      )}
    </div>
  )
}
