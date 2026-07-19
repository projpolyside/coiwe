import type { Metadata } from "next"
import { CategoryGrid } from "@/components/home/category-grid"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Cryptocurrency Sectors & Categories",
  description: "Browse cryptocurrencies grouped by industry sectors — AI, DeFi, Meme coins, Layer 1s, Real World Assets, and Gaming.",
}

export default function CategoriesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        title="Coin Categories"
        subtitle="Explore cryptocurrencies grouped by industry sectors, utility types, and technology stacks."
      />
      <div className="mt-8">
        <CategoryGrid />
      </div>
    </div>
  )
}
