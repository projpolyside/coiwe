// CoinGecko API client with in-memory caching and rate-limit protection.
// Works without an API key against the public API. If VITE_COINGECKO_API_KEY is set,
// it is sent to raise rate limits. No key is required to deploy.

const API_KEY = (import.meta as any).env?.VITE_COINGECKO_API_KEY as string | undefined
const PRO = !!API_KEY
const BASE = PRO
  ? "https://pro-api.coingecko.com/api/v3"
  : "https://api.coingecko.com/api/v3"

type CacheEntry = { value: unknown; expires: number }
const cache = new Map<string, CacheEntry>()

// Simple in-flight de-duplication so concurrent requests share one fetch.
const inflight = new Map<string, Promise<unknown>>()

function authHeaders(): HeadersInit {
  const headers: Record<string, string> = { Accept: "application/json" }
  if (API_KEY) {
    if (PRO) headers["x-cg-pro-api-key"] = API_KEY
    else headers["x-cg-demo-api-key"] = API_KEY
  }
  return headers
}

/**
 * Fetch a CoinGecko endpoint with automatic in-memory caching.
 * @param path   API path starting with `/` (e.g. `/coins/markets?...`)
 * @param ttlSec Cache TTL in seconds (default 60)
 */
export async function cg<T>(path: string, ttlSec = 60): Promise<T | null> {
  const key = path
  const now = Date.now()

  // Return from cache if still fresh.
  const hit = cache.get(key)
  if (hit && hit.expires > now) return hit.value as T

  // De-duplicate concurrent requests for the same path.
  if (inflight.has(key)) return inflight.get(key)! as Promise<T>

  const promise = (async () => {
    try {
      const res = await fetch(`${BASE}${path}`, {
        headers: authHeaders(),
      })

      if (res.status === 429) {
        // Rate limited — return stale value if available.
        console.warn("[cg] Rate limited for", path)
        return hit?.value ?? null
      }

      if (!res.ok) {
        console.warn(`[cg] ${res.status} for ${path}`)
        return null
      }

      const value = await res.json()
      cache.set(key, { value, expires: now + ttlSec * 1000 })
      return value
    } catch (err) {
      console.warn("[cg] Fetch error for", path, err)
      return hit?.value ?? null
    } finally {
      inflight.delete(key)
    }
  })()

  inflight.set(key, promise)
  return promise as Promise<T>
}
