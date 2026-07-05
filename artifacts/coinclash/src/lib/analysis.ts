import type { MarketCoin } from "./coingecko/types"
import { formatLargeNumber, formatPercent, formatPrice } from "./format"

export interface MetricResult {
  label: string
  description: string
  winner: "a" | "b" | "tie"
  aDisplay: string
  bDisplay: string
}

export interface ComparisonAnalysis {
  scoreA: number
  scoreB: number
  metrics: MetricResult[]
  winner: MarketCoin
  loser: MarketCoin
  isTie: boolean
  verdict: string
  highlights: string[]
}

function compareNumeric(
  a: number | null | undefined,
  b: number | null | undefined,
  higherIsBetter = true,
): "a" | "b" | "tie" {
  const av = a ?? 0
  const bv = b ?? 0
  if (av === bv) return "tie"
  const aWins = higherIsBetter ? av > bv : av < bv
  return aWins ? "a" : "b"
}

export function analyzeComparison(
  a: MarketCoin,
  b: MarketCoin,
): ComparisonAnalysis {
  const metrics: MetricResult[] = []

  const marketCap = compareNumeric(a.market_cap, b.market_cap)
  metrics.push({
    label: "Market Capitalization",
    description:
      "A larger market cap generally signals a more established asset with deeper liquidity and lower relative volatility.",
    winner: marketCap,
    aDisplay: formatLargeNumber(a.market_cap),
    bDisplay: formatLargeNumber(b.market_cap),
  })

  const volume = compareNumeric(a.total_volume, b.total_volume)
  metrics.push({
    label: "24h Trading Volume",
    description:
      "Higher trading volume indicates stronger market activity and easier entry and exit for investors.",
    winner: volume,
    aDisplay: formatLargeNumber(a.total_volume),
    bDisplay: formatLargeNumber(b.total_volume),
  })

  const rank = compareNumeric(a.market_cap_rank, b.market_cap_rank, false)
  metrics.push({
    label: "Market Rank",
    description:
      "A higher market rank reflects greater overall adoption and investor confidence relative to the rest of the market.",
    winner: rank,
    aDisplay: a.market_cap_rank ? `#${a.market_cap_rank}` : "—",
    bDisplay: b.market_cap_rank ? `#${b.market_cap_rank}` : "—",
  })

  const perf7d = compareNumeric(
    a.price_change_percentage_7d_in_currency,
    b.price_change_percentage_7d_in_currency,
  )
  metrics.push({
    label: "7-Day Performance",
    description:
      "Recent price momentum over the past week, useful for gauging short-term market sentiment.",
    winner: perf7d,
    aDisplay: formatPercent(a.price_change_percentage_7d_in_currency),
    bDisplay: formatPercent(b.price_change_percentage_7d_in_currency),
  })

  const perf30d = compareNumeric(
    a.price_change_percentage_30d_in_currency,
    b.price_change_percentage_30d_in_currency,
  )
  metrics.push({
    label: "30-Day Performance",
    description:
      "Medium-term momentum that helps smooth out daily noise and reveal an emerging trend.",
    winner: perf30d,
    aDisplay: formatPercent(a.price_change_percentage_30d_in_currency),
    bDisplay: formatPercent(b.price_change_percentage_30d_in_currency),
  })

  const perf1y = compareNumeric(
    a.price_change_percentage_1y_in_currency,
    b.price_change_percentage_1y_in_currency,
  )
  metrics.push({
    label: "1-Year Performance",
    description:
      "Long-term return that reflects how the asset has rewarded patient holders over a full market cycle.",
    winner: perf1y,
    aDisplay: formatPercent(a.price_change_percentage_1y_in_currency),
    bDisplay: formatPercent(b.price_change_percentage_1y_in_currency),
  })

  const athRecovery = compareNumeric(
    a.ath_change_percentage,
    b.ath_change_percentage,
  )
  metrics.push({
    label: "Distance From ATH",
    description:
      "How far below its all-time high a coin is sitting. Smaller drawdown means a healthier price recovery.",
    winner: athRecovery,
    aDisplay: formatPercent(a.ath_change_percentage),
    bDisplay: formatPercent(b.ath_change_percentage),
  })

  const supply = compareNumeric(
    a.max_supply != null ? 1 : 0,
    b.max_supply != null ? 1 : 0,
  )
  metrics.push({
    label: "Supply Scarcity",
    description:
      "A capped maximum supply enforces digital scarcity — similar to gold — limiting long-term inflation risk.",
    winner: supply,
    aDisplay: a.max_supply != null ? formatLargeNumber(a.max_supply) : "Uncapped",
    bDisplay: b.max_supply != null ? formatLargeNumber(b.max_supply) : "Uncapped",
  })

  const priceHigh = compareNumeric(a.current_price, b.current_price)
  metrics.push({
    label: "Current Price",
    description:
      "The latest market price — note that a higher price alone does not indicate greater value.",
    winner: priceHigh,
    aDisplay: formatPrice(a.current_price),
    bDisplay: formatPrice(b.current_price),
  })

  let scoreA = 0
  let scoreB = 0
  for (const m of metrics) {
    if (m.winner === "a") scoreA++
    else if (m.winner === "b") scoreB++
  }

  const isTie = scoreA === scoreB
  const winner = scoreA >= scoreB ? a : b
  const loser = scoreA >= scoreB ? b : a

  const verdict = isTie
    ? `${a.name} and ${b.name} are evenly matched across our key metrics. Both are compelling assets with different risk profiles — consider your investment timeline and risk tolerance before choosing.`
    : `${winner.name} leads ${loser.name} ${Math.max(scoreA, scoreB)}–${Math.min(scoreA, scoreB)} across our core metrics. While ${loser.name} may offer compelling upside in specific areas, ${winner.name} demonstrates stronger fundamentals overall. As always, do your own research before making any investment decision.`

  const highlights: string[] = []
  for (const m of metrics) {
    const winnerName = m.winner === "a" ? a.name : m.winner === "b" ? b.name : null
    if (winnerName) {
      highlights.push(`${winnerName} wins on ${m.label.toLowerCase()}.`)
    }
    if (highlights.length >= 4) break
  }

  return { scoreA, scoreB, metrics, winner, loser, isTie, verdict, highlights }
}
