<<<<<<< HEAD
"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

/**
 * Safe, active Google AdSense slot component.
 * Detects route changes to dynamically push ads during client-side navigation.
=======
import { cn } from "@/lib/utils"

/**
 * Reserved, non-intrusive ad placement area designed for future AdSense.
 * Renders a clearly labelled, content-friendly slot that never interrupts
 * usability. Replace the inner markup with an <ins class="adsbygoogle"> unit
 * once AdSense is approved.
>>>>>>> 3bcf370a049e3897e7c8ccd560611082657e6fa3
 */
export function AdSlot({
  label = "Advertisement",
  className,
  format = "horizontal",
<<<<<<< HEAD
  slotId = "default",
=======
>>>>>>> 3bcf370a049e3897e7c8ccd560611082657e6fa3
}: {
  label?: string
  className?: string
  format?: "horizontal" | "rectangle"
<<<<<<< HEAD
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

=======
}) {
>>>>>>> 3bcf370a049e3897e7c8ccd560611082657e6fa3
  return (
    <aside
      aria-label="Advertisement"
      className={cn(
<<<<<<< HEAD
        "flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/45 p-4 text-muted-foreground transition-all hover:bg-card/70",
        format === "horizontal" ? "min-h-[120px]" : "min-h-[280px]",
=======
        "flex w-full items-center justify-center rounded-xl border border-dashed border-border bg-card text-muted-foreground",
        format === "horizontal" ? "min-h-[90px] py-4" : "min-h-[250px] py-6",
>>>>>>> 3bcf370a049e3897e7c8ccd560611082657e6fa3
        className,
      )}
      data-ad-slot
    >
<<<<<<< HEAD
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

=======
      <span className="text-xs uppercase tracking-widest">{label}</span>
    </aside>
  )
}
>>>>>>> 3bcf370a049e3897e7c8ccd560611082657e6fa3
