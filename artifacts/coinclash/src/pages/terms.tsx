import { SITE } from "@/lib/constants"

export function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last Updated: June 15, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            By accessing and using <strong>{SITE.name}</strong>, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">1. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on {SITE.name}'s website for personal, non-commercial transitory viewing only.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">2. Disclaimer</h2>
          <p>
            The materials on {SITE.name}'s website are provided on an 'as is' basis. {SITE.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">3. Limitations</h2>
          <p>
            In no event shall {SITE.name} or its suppliers be liable for any damages arising out of the use or inability to use the materials on {SITE.name}'s website.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">4. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
          </p>
        </div>
      </div>
    </div>
  )
}
