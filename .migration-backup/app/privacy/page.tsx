import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy and data practices for ${SITE.name}.`,
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last Updated: June 15, 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            At <strong>{SITE.name}</strong>, accessible from{" "}
            <a href={SITE.url} className="text-primary hover:underline">
              {SITE.url}
            </a>
            , one of our main priorities is the privacy of our visitors. This Privacy
            Policy document contains types of information that is collected and
            recorded by {SITE.name} and how we use it.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            1. Consent
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree
            to its terms.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            2. Information We Collect
          </h2>
          <p>
            We only collect information directly provided by you, or automatically
            through standard web analytics.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Log Files:</strong> {SITE.name} follows a standard procedure
              of using log files. These files log visitors when they visit websites.
              The information collected by log files includes internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            3. Google DoubleClick DART Cookie & Third-Party Advertising
          </h2>
          <p>
            Google is one of the third-party vendors on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors based
            upon their visit to our site and other sites on the internet.
          </p>
          <p>
            Visitors may choose to decline the use of DART cookies by visiting the
            Google ad and content network Privacy Policy at the following URL:{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>
          <p>
            Some of the advertisers on our site may use cookies and web beacons.
            Our advertising partners include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google AdSense</strong>
            </li>
          </ul>
          <p>
            These third-party ad servers or ad networks use technologies like
            cookies, JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on {SITE.name}, which are sent
            directly to users' browsers. They automatically receive your IP address
            when this occurs. These technologies are used to measure the
            effectiveness of their advertising campaigns and/or to personalize the
            advertising content that you see on websites that you visit.
          </p>
          <p>
            Note that {SITE.name} has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            4. Third-Party Privacy Policies
          </h2>
          <p>
            {SITE.name}'s Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective Privacy
            Policies of these third-party ad servers for more detailed information.
            It may include their practices and instructions about how to opt-out of
            certain options.
          </p>
          <p>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management with
            specific web browsers, it can be found at the browsers' respective
            websites.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            5. GDPR & CCPA Privacy Rights
          </h2>
          <p>
            We want to make sure you are fully aware of all of your data protection
            rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>The right to access</strong> – You have the right to request
              copies of your personal data.
            </li>
            <li>
              <strong>The right to rectification</strong> – You have the right to
              request that we correct any information you believe is inaccurate.
            </li>
            <li>
              <strong>The right to erasure</strong> – You have the right to request
              that we erase your personal data, under certain conditions.
            </li>
            <li>
              <strong>The right to restrict processing</strong> – You have the
              right to request that we restrict the processing of your personal
              data, under certain conditions.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">
            6. Children's Information
          </h2>
          <p>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </p>
          <p>
            {SITE.name} does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that your
            child provided this kind of information on our website, we strongly
            encourage you to contact us immediately and we will do our best efforts
            to promptly remove such information from our records.
          </p>
        </div>
      </div>
    </div>
  )
}
