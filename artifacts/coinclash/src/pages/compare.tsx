import { ComparePicker } from "@/components/compare-picker"
import { PopularComparisons } from "@/components/home/popular-comparisons"
import { SectionHeading } from "@/components/section-heading"

export function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div>
        <SectionHeading
          title="Compare Cryptocurrencies"
          subtitle="Compare any two cryptocurrencies side-by-side with live metrics, historical momentum, and written verdicts."
        />
        <div className="mt-8 max-w-3xl mx-auto">
          <ComparePicker />
        </div>
      </div>

      <div className="border-t border-border pt-12">
        <h2 className="text-xl font-bold text-foreground mb-6">Popular Comparisons</h2>
        <PopularComparisons />
      </div>
    </div>
  )
}
