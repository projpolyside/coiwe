"use client"
import { useState } from "react"

export function Newsletter() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <section className="rounded-2xl border border-border bg-card p-8 text-center">
      <h2 className="text-xl font-bold text-foreground">Stay Updated</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Get weekly market summaries and new comparison breakdowns.
      </p>
      {submitted ? (
        <p className="mt-4 text-sm font-medium text-success">
          Thanks! You&apos;re subscribed.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
          className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring sm:max-w-xs"
          />
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
