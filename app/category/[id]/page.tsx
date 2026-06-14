import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getCoinsByCategory } from "@/lib/coingecko/api"
import { FEATURED_CATEGORIES } from "@/lib/constants"
import { CoinTable } from "@/components/coin-table"
import { SectionHeading } from "@/components/section-heading"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSlot } from "@/components/ad-slot"

export async function generateStaticParams() {
  return FEATURED_CATEGORIES.map((cat) => ({
    id: cat.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const cat = FEATURED_CATEGORIES.find((c) => c.id === id)
  if (!cat) return {}

  return {
    title: `${cat.name} Cryptocurrencies Ranked by Market Cap`,
    description: cat.blurb,
  }
}

export default async function CategoryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const cat = FEATURED_CATEGORIES.find((c) => c.id === id)
  if (!cat) notFound()

  // Fetch coins ranked by market cap under this category
  const coins = await getCoinsByCategory(cat.id, 50)

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/categories" },
          { label: cat.name, href: `/category/${cat.id}` },
        ]}
      />

      <SectionHeading
        title={`${cat.name} Coins`}
        subtitle={cat.blurb}
      />

      <AdSlot format="horizontal" slotId="category-top" />

      {coins.length > 0 ? (
        <div className="mt-8">
          <CoinTable coins={coins} />
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center text-muted-foreground">
          No coins found in this category. Please check back later.
        </div>
      )}

      <AdSlot format="horizontal" slotId="category-bottom" />
    </div>
  )
}
