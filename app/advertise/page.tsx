import Link from "next/link"
import { SITE } from "@/lib/constants"

export const metadata = {
  title: "Advertise",
  description: `Information for advertisers and sponsors on ${SITE.name}.`,
}

export default function AdvertisePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12 space-y-6">
        <h1 className="text-3xl font-extrabold text-foreground">Advertise on {SITE.name}</h1>

        <p className="text-sm text-muted-foreground leading-relaxed">
          We run clearly labeled ads to support independent publishing. Our ad slots are placed thoughtfully to avoid disrupting user research while helping advertisers reach an engaged audience of crypto-interested readers.
        </p>

        <h2 className="mt-4 text-xl font-bold text-foreground">Ad placements</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground space-y-2">
          <li>Homepage leaderboard and in-feed slots</li>
          <li>Article inline slots on insights pages</li>
          <li>Sidebar and footer sponsorship options</li>
        </ul>

        <h2 className="mt-4 text-xl font-bold text-foreground">Transparency & policy</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All ads are labeled and we do not accept misleading or harmful creatives. We reserve the right to review ad copy and landing pages. Advertisers must comply with applicable laws and platform policies.
        </p>

        <h2 className="mt-4 text-xl font-bold text-foreground">Privacy & data</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Advertising partners must follow our privacy policy. We do not sell user data; ads are served via third-party ad networks such as Google AdSense. For custom integrations, we can support direct campaign reporting.
        </p>

        <h2 className="mt-4 text-xl font-bold text-foreground">Contact</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For inquiries, email <a href="mailto:ads@coinclash.example" className="text-primary hover:underline">ads@coinclash.example</a> or use our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link>.
        </p>
      </div>
    </div>
  )
}
