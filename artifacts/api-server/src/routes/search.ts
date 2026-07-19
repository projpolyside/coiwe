import { Router } from "express";

const router = Router();

const BASE = "https://api.coingecko.com/api/v3";

// Simple in-memory cache
type CacheEntry = { value: unknown; expires: number };
const cache = new Map<string, CacheEntry>();

async function cgSearch(query: string): Promise<unknown> {
  const key = query.toLowerCase().trim();
  const now = Date.now();
  const hit = cache.get(key);
  if (hit && hit.expires > now) return hit.value;

  const url = `${BASE}/search?query=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
      ...(process.env.COINGECKO_API_KEY
        ? { "x-cg-pro-api-key": process.env.COINGECKO_API_KEY }
        : {}),
    },
  });

  if (!res.ok) return { coins: [] };
  const data = await res.json() as { coins: unknown[] };
  const coins = (data.coins ?? []).slice(0, 20);
  cache.set(key, { value: { coins }, expires: now + 120_000 });
  return { coins };
}

router.get("/search", async (req, res) => {
  const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
  if (!q) {
    res.json({ coins: [] });
    return;
  }
  try {
    const result = await cgSearch(q);
    res.setHeader("Cache-Control", "public, s-maxage=120, stale-while-revalidate=300");
    res.json(result);
  } catch (err) {
    req.log?.error({ err }, "search failed");
    res.status(500).json({ coins: [] });
  }
});

export default router;
