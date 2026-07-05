"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

/**
 * Safe, active Google AdSense slot component.
 * Detects route changes to dynamically push ads during client-side navigation.
 */
export function AdSlot({
  label = "Advertisement",
  className,
  format = "horizontal",
  slotId = "default",
}: {
  label?: string
  className?: string
  format?: "horizontal" | "rectangle"
  slotId?: string
}) {
  const pathname = usePathname()

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // @ts-ignore
        const adsbygoogle = window.adsbygoogle || []
        adsbygoogle.push({})
      }
    } catch (err) {
      console.warn("AdSense push failed (this is normal in development or if an adblocker is active):", err)
    }
  }, [pathname])

  return (
    <aside
      aria-label="Advertisement"
      className={cn(
        "flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/45 p-4 text-muted-foreground transition-all hover:bg-card/70",
        format === "horizontal" ? "min-h-[120px]" : "min-h-[280px]",
        className,
      )}
      data-ad-slot
    >
      <span className="mb-2 text-[10px] uppercase tracking-widest text-muted-foreground/60">{label}</span>

      <div className="w-full overflow-hidden flex justify-center items-center">
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            minWidth: format === "horizontal" ? "320px" : "250px",
            minHeight: format === "horizontal" ? "90px" : "250px",
          }}
          data-ad-client="ca-pub-8736297902100969"
          data-ad-slot={slotId}
          data-ad-format={format === "horizontal" ? "horizontal" : "rectangle"}
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  )
}

