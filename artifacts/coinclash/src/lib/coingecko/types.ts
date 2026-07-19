export interface MarketCoin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number | null
  total_volume: number
  price_change_percentage_24h: number | null
  price_change_percentage_24h_in_currency: number | null
  price_change_percentage_7d_in_currency: number | null
  price_change_percentage_30d_in_currency: number | null
  price_change_percentage_1y_in_currency: number | null
  circulating_supply: number | null
  total_supply: number | null
  max_supply: number | null
  ath: number
  ath_change_percentage: number | null
  atl: number
  atl_change_percentage: number | null
  low_24h: number | null
  high_24h: number | null
  sparkline_in_7d?: {
    price: number[]
  }
}

export interface CoinDetail {
  id: string
  symbol: string
  name: string
  description: { en: string }
  image: { thumb: string; small: string; large: string }
  market_cap_rank: number | null
  market_data: {
    current_price: { usd: number }
    market_cap: { usd: number }
    total_volume: { usd: number }
    price_change_percentage_24h: number | null
    circulating_supply: number | null
    total_supply: number | null
    max_supply: number | null
    ath: { usd: number }
    ath_change_percentage: { usd: number }
  }
  categories: string[]
  links: {
    homepage: string[]
    blockchain_site: string[]
    official_forum_url: string[]
    twitter_screen_name: string
    subreddit_url: string
  }
}

export interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    market_cap_rank: number
    thumb: string
    small: string
    large: string
    slug: string
    price_btc: number
    data?: {
      price: number
      price_change_percentage_24h?: { usd: number }
      market_cap?: string
    }
  }
}

export interface CategoryShort {
  category_id: string
  name: string
}

export interface CategoryMarket {
  id: string
  name: string
  market_cap: number
  market_cap_change_24h: number
  volume_24h: number
  top_3_coins: string[]
  top_3_coins_id?: string[]
}

export interface SearchCoin {
  id: string
  name: string
  symbol: string
  market_cap_rank: number | null
  thumb: string
  large: string
}

export interface MarketChart {
  prices: [number, number][]
  market_caps: [number, number][]
  total_volumes: [number, number][]
}
