import { useEffect, useState } from "react"
import { Link } from "wouter"
import { Flame, TrendingUp, TrendingDown } from "lucide-react"
import { getMarkets, getTrending } from "@/lib/coingecko/api"
import { formatPrice } from "@/lib/format"
import { SectionHeading } from "@/components/section-heading"
import { CoinCard } from "@/components/coin-card"
import { ChangeBadge } from "@/components/change-badge"
import { Newsletter } from "@/components/newsletter"
import { HomeHero } from "@/components/home/home-hero"
import { PopularComparisons } from "@/components/home/popular-comparisons"
import { CategoryGrid } from "@/components/home/category-grid"
import { MarketInsights } from "@/components/home/market-insights"
import type { MarketCoin } from "@/lib/coingecko/types"
import type { TrendingCoin } from "@/lib/coingecko/types"

export function HomePage() {
  const [markets, setMarkets] = useState<MarketCoin[]>([])
  const [trending, setTrending] = useState<TrendingCoin[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getMarkets(1, 100), getTrending()])
      .then(([m, t]) => {
        setMarkets(m)
        setTrending(t)
      })
      .catch(() => {
        // Silently fail — show empty sections rather than stalling
      })
      .finally(() => setLoading(false))
  }, [])

  const movers = [...markets].filter(
    (c) => c.price_change_percentage_24h_in_currency != null,
  )
  movers.sort(
    (a, b) =>
      (b.price_change_percentage_24h_in_currency ?? 0) -
      (a.price_change_percentage_24h_in_currency ?? 0),
  )
  const gainers = movers.slice(0, 4)
  const losers = [...movers].reverse().slice(0, 4)
  const trendingCoins = trending.slice(0, 8)
  const featured = markets.slice(0, 6)

  return (
    <>
      <HomeHero />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        <section aria-labelledby="popular-heading">
          <div id="popular-heading">
            <SectionHeading
              title="Popular Comparisons"
              subtitle="Jump straight into the head-to-head matchups crypto investors search for most."
              href="/compare"
              linkLabel="Build your own"
            />
          </div>
          <PopularComparisons />
        </section>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : (
          <>
            {trendingCoins.length > 0 && (
              <section aria-labelledby="trending-heading">
                <div id="trending-heading">
                  <SectionHeading
                    title="Trending Coins"
                    subtitle="The cryptocurrencies attracting the most search interest right now."
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {trendingCoins.map((t) => (
                    <Link
                      key={t.item.id}
                      href={`/coin/${t.item.id}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Flame className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <img
                        src={t.item.thumb || "/placeholder.svg"}
                        alt={`${t.item.name} logo`}
                        width={28}
                        height={28}
                        className="rounded-full"
                      />
                      <div className="min-w-0">
                        <p className="truncate font-medium text-foreground">
                          {t.item.name}
                        </p>
                        <p className="text-xs uppercase text-muted-foreground">
                          {t.item.symbol}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Market Movers */}
            <section aria-labelledby="movers-heading">
              <div id="movers-heading">
                <SectionHeading
                  title="Market Movers"
                  subtitle="Today's biggest gainers and losers by 24-hour price change."
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <MoverList title="Top Gainers" icon={<TrendingUp className="h-4 w-4 text-success" />} coins={gainers} />
                <MoverList title="Top Losers" icon={<TrendingDown className="h-4 w-4 text-destructive" />} coins={losers} />
              </div>
            </section>

            {/* Featured Coins */}
            {featured.length > 0 && (
              <section aria-labelledby="featured-heading">
                <div id="featured-heading">
                  <SectionHeading
                    title="Top Coins by Market Cap"
                    subtitle="The largest cryptocurrencies ranked by market capitalization."
                    href="/coins"
                    linkLabel="See all"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {featured.map((coin) => (
                    <CoinCard key={coin.id} coin={coin} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        <section aria-labelledby="categories-heading">
          <div id="categories-heading">
            <SectionHeading
              title="Explore by Category"
              subtitle="Browse cryptocurrencies grouped by sector — AI, DeFi, Gaming, and more."
              href="/categories"
              linkLabel="All categories"
            />
          </div>
          <CategoryGrid />
        </section>

        <section aria-labelledby="insights-heading">
          <div id="insights-heading">
            <SectionHeading
              title="Market Insights"
              subtitle="Plain-English guides to help you understand the data behind cryptocurrency comparisons."
              href="/insights"
              linkLabel="All articles"
            />
          </div>
          <MarketInsights />
        </section>

        <Newsletter />
      </div>
    </>
  )
}

function MoverList({
  title,
  icon,
  coins,
}: {
  title: string
  icon: React.ReactNode
  coins: MarketCoin[]
}) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        {icon}
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id} className="border-b border-border last:border-0">
            <Link
              href={`/coin/${coin.id}`}
              className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-secondary/60"
            >
              <img
                src={coin.image || "/placeholder.svg"}
                alt={`${coin.name} logo`}
                width={28}
                height={28}
                className="rounded-full"
              />
              <div className="min-w-0">
                <p className="truncate font-medium text-foreground">
                  {coin.name}
                </p>
                <p className="text-xs uppercase text-muted-foreground">
                  {coin.symbol}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-medium tabular-nums text-foreground">
                  {formatPrice(coin.current_price)}
                </p>
                <ChangeBadge
                  value={coin.price_change_percentage_24h_in_currency}
                  size="sm"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
