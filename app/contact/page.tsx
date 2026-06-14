import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the team at ${SITE.name} for feedback, support, or inquiries.`,
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Have questions, feedback, or business inquiries? Fill out the form below or reach out directly.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>

          {/* Info details */}
          <div className="space-y-6 rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
            <div>
              <h3 className="font-semibold text-foreground">Support Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                support@coinclash.app
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">General Inquiries</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                hello@coinclash.app
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Response Time</h3>
              <p className="mt-1 text-sm text-muted-foreground font-medium text-primary">
                Typically within 24–48 hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Note</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Please note that we cannot offer any financial or investment advice under any circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
