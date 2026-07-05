import { useState } from "react"
import { SITE } from "@/lib/constants"

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

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
          {submitted ? (
            <div className="flex items-center justify-center rounded-xl border border-border bg-success/5 p-8 text-center">
              <div>
                <p className="text-lg font-semibold text-success">Message sent!</p>
                <p className="mt-1 text-sm text-muted-foreground">We'll get back to you within 24–48 hours.</p>
              </div>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
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
          )}

          {/* Info */}
          <div className="space-y-6 rounded-xl border border-border bg-secondary/30 p-6 md:p-8">
            <div>
              <h3 className="font-semibold text-foreground">Support Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">support@coinclash.app</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">General Inquiries</h3>
              <p className="mt-1 text-sm text-muted-foreground">hello@coinclash.app</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Response Time</h3>
              <p className="mt-1 text-sm font-medium text-primary">Typically within 24–48 hours.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">About {SITE.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.name} is a cryptocurrency data and comparison platform powered by CoinGecko's public API. We do not offer financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
