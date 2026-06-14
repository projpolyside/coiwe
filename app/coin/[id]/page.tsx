import { notFound } from "next/navigation"
import Image from "next/image"
import type { Metadata } from "next"
import { getCoinMarket } from "@/lib/coingecko/api"
import { formatPrice, formatPercent, formatLargeNumber } from "@/lib/format"
import { ChangeBadge } from "@/components/change-badge"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSlot } from "@/components/ad-slot"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const coin = await getCoinMarket(id)
  if (!coin) return {}

  return {
    title: `${coin.name} (${coin.symbol.toUpperCase()}) Live Price & Metrics`,
    description: `Track live ${coin.name} price, market cap rank #${coin.market_cap_rank}, 24-hour volume, circulating supply, and historical drawdowns.`,
  }
}

export default async function CoinDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const coin = await getCoinMarket(id)
  if (!coin) notFound()

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Coins", href: "/coins" },
          { label: coin.name, href: `/coin/${coin.id}` },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {/* Main Info Header */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={coin.image || "/placeholder.svg"}
                alt={`${coin.name} logo`}
                width={56}
                height={56}
                className="rounded-full"
                unoptimized
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-foreground sm:text-3xl">
                    {coin.name}
                  </h1>
                  <span className="rounded-lg bg-secondary px-2 py-0.5 text-xs font-semibold uppercase text-muted-foreground">
                    {coin.symbol}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Market Cap Rank #{coin.market_cap_rank ?? "—"}
                </p>
              </div>
            </div>

            <div className="text-left md:text-right">
              <p className="text-3xl font-bold tabular-nums text-foreground">
                {formatPrice(coin.current_price)}
              </p>
              <div className="mt-1 flex md:justify-end gap-2">
                <ChangeBadge value={coin.price_change_percentage_24h} size="md" />
                <span className="text-xs text-muted-foreground mt-0.5">24h</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                label: "Market Capitalization",
                value: formatLargeNumber(coin.market_cap),
                desc: "Total value of circulating supply.",
              },
              {
                label: "24h Trading Volume",
                value: formatLargeNumber(coin.total_volume),
                desc: "Volume of tokens traded in 24h.",
              },
              {
                label: "Circulating Supply",
                value: coin.circulating_supply != null ? `${formatLargeNumber(coin.circulating_supply)} ${coin.symbol.toUpperCase()}` : "—",
                desc: "Tokens currently in public hands.",
              },
              {
                label: "All-Time High (ATH)",
                value: formatPrice(coin.ath),
                desc: `${formatPercent(coin.ath_change_percentage)} drawdown from peak.`,
              },
              {
                label: "Max Supply",
                value: coin.max_supply != null ? `${formatLargeNumber(coin.max_supply)} ${coin.symbol.toUpperCase()}` : "Uncapped",
                desc: "Maximum token limit ever allowed.",
              },
              {
                label: "High / Low (24h)",
                value: `${formatPrice(coin.low_24h)} / ${formatPrice(coin.high_24h)}`,
                desc: "24h range fluctuations.",
              },
            ].map((m, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-medium text-muted-foreground">{m.label}</p>
                <p className="mt-2 text-lg font-bold text-foreground">{m.value}</p>
                <p className="mt-1 text-xs text-muted-foreground/80">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-bold text-foreground">About {coin.name}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {coin.name} ({coin.symbol.toUpperCase()}) is currently ranked #{coin.market_cap_rank ?? "—"} on CoinClash by market capitalization. It has a circulating supply of {coin.circulating_supply ? formatLargeNumber(coin.circulating_supply) : "—"} out of a total supply of {coin.total_supply ? formatLargeNumber(coin.total_supply) : "—"}. The 24-hour trading volume is {coin.total_volume ? formatLargeNumber(coin.total_volume) : "—"}. Use CoinClash tools to compare {coin.name} side-by-side with other cryptocurrencies to gain deeper market insights.
            </p>
          </div>
        </div>

        {/* Sidebar Ads & Action */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 text-center space-y-4">
            <h3 className="font-bold text-foreground">Compare {coin.name}</h3>
            <p className="text-xs text-muted-foreground">
              Run a head-to-head comparison between {coin.name} and another cryptocurrency to compare capitalization, drawdowns, and supply scarcity.
            </p>
            <a
              href="/compare"
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Comparison
            </a>
          </div>

          <AdSlot format="rectangle" slotId="coin-sidebar" />
        </div>
      </div>

      <AdSlot format="horizontal" slotId="coin-bottom" />
    </div>
  )
}
