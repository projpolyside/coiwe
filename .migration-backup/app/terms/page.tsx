import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service and conditions for using ${SITE.name}.`,
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last Updated: June 15, 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Welcome to <strong>{SITE.name}</strong>!
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the use of
            {SITE.name}'s Website, located at{" "}
            <a href={SITE.url} className="text-primary hover:underline">
              {SITE.url}
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing this website we assume you accept these terms and conditions.
            Do not continue to use {SITE.name} if you do not agree to take all of
            the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            2. Cookies
          </h2>
          <p>
            We employ the use of cookies. By accessing {SITE.name}, you agreed to
            use cookies in agreement with the {SITE.name}'s Privacy Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user's details
            for each visit. Cookies are used by our website to enable the functionality
            of certain areas to make it easier for people visiting our website. Some of
            our affiliate/advertising partners may also use cookies.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            3. Disclaimer of Liability (Information Only)
          </h2>
          <p>
            The content provided on {SITE.name} is for general informational
            purposes only. None of the information on this website constitutes
            financial, investment, legal, or trading advice.
          </p>
          <p>
            Cryptocurrency markets are highly volatile. You should always consult with a
            licensed financial advisor before making any investment decisions. Any actions
            you take based on the information found on this website are strictly at your
            own risk.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            4. License & Content Usage
          </h2>
          <p>
            Unless otherwise stated, {SITE.name} and/or its licensors own the
            intellectual property rights for all material on {SITE.name}. All
            intellectual property rights are reserved. You may access this from
            {SITE.name} for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Republish material from {SITE.name}</li>
            <li>Sell, rent, or sub-license material from {SITE.name}</li>
            <li>Reproduce, duplicate, or copy material from {SITE.name}</li>
            <li>Redistribute content from {SITE.name}</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            5. Removal of Links
          </h2>
          <p>
            If you find any link on our Website that is offensive for any reason, you
            are free to contact and inform us at any moment. We will consider requests
            to remove links but we are not obligated to or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we do not
            warrant its completeness or accuracy; nor do we promise to ensure that the
            website remains available or that the material on the website is kept up
            to date.
          </p>
        </div>
      </div>
    </div>
  )
}
