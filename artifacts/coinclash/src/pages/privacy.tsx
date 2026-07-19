import { SITE } from "@/lib/constants"

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">Last Updated: June 15, 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            At <strong>{SITE.name}</strong>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by {SITE.name} and how we use it.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">1. Consent</h2>
          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">2. Information We Collect</h2>
          <p>We only collect information directly provided by you, or automatically through standard web analytics.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Log Files:</strong> {SITE.name} follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, ISP, date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information.</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">3. Third-Party Advertising</h2>
          <p>
            Google is one of the third-party vendors on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors. Visitors may opt out by visiting the{" "}
            <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Google ad and content network Privacy Policy
            </a>.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">4. Contact</h2>
          <p>
            If you have additional questions about our Privacy Policy, contact us at{" "}
            <a href="/contact" className="text-primary hover:underline">our contact page</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
