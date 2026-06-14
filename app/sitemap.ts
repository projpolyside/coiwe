import type { MetadataRoute } from "next"
import { SITE, POPULAR_COMPARISONS, FEATURED_CATEGORIES } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/coins",
    "/compare",
    "/categories",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/insights",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  const comparisons = POPULAR_COMPARISONS.map((c) => ({
    url: `${SITE.url}/compare/${c.a}-vs-${c.b}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const categories = FEATURED_CATEGORIES.map((c) => ({
    url: `${SITE.url}/category/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...routes, ...comparisons, ...categories]
}
