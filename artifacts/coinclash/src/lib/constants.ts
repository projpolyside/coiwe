export const SITE = {
  name: "CoinClash",
  tagline: "Compare Crypto. Side by Side.",
  description:
    "CoinClash lets you compare any two cryptocurrencies side-by-side with live prices, market caps, historical performance, and clear written verdicts.",
  url: "https://coinclash.replit.app",
}

export const POPULAR_COMPARISONS: {
  a: string
  b: string
  aName: string
  bName: string
}[] = [
  { a: "bitcoin", b: "ethereum", aName: "Bitcoin", bName: "Ethereum" },
  { a: "solana", b: "ethereum", aName: "Solana", bName: "Ethereum" },
  { a: "bitcoin", b: "solana", aName: "Bitcoin", bName: "Solana" },
  { a: "ripple", b: "stellar", aName: "XRP", bName: "Stellar" },
  { a: "cardano", b: "polkadot", aName: "Cardano", bName: "Polkadot" },
  { a: "tron", b: "ethereum", aName: "TRON", bName: "Ethereum" },
]

export const FEATURED_CATEGORIES: { id: string; name: string; blurb: string }[] = [
  {
    id: "artificial-intelligence",
    name: "AI Coins",
    blurb: "Tokens powering decentralized AI compute, agents, and data networks.",
  },
  {
    id: "gaming",
    name: "Gaming Coins",
    blurb: "Currencies behind blockchain games and in-game economies.",
  },
  {
    id: "meme-token",
    name: "Meme Coins",
    blurb: "Community-driven tokens fueled by culture and viral momentum.",
  },
  {
    id: "decentralized-finance-defi",
    name: "DeFi Coins",
    blurb: "Protocols for lending, trading, and yield without intermediaries.",
  },
  {
    id: "real-world-assets-rwa",
    name: "RWA Coins",
    blurb: "Tokens bringing real-world assets like bonds and property on-chain.",
  },
  {
    id: "layer-1",
    name: "Layer 1",
    blurb: "Base blockchains that settle transactions and secure their networks.",
  },
]

export function comparisonSlug(a: string, b: string): string {
  return `${a}-vs-${b}`
}

export function parseComparisonSlug(
  slug: string,
): { a: string; b: string } | null {
  const idx = slug.indexOf("-vs-")
  if (idx === -1) return null
  const a = slug.slice(0, idx)
  const b = slug.slice(idx + 4)
  if (!a || !b) return null
  return { a, b }
}
