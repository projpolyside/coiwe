import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Financial data and accuracy disclaimer for ${SITE.name}.`,
}

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Disclaimer
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last Updated: June 15, 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p className="font-semibold text-foreground">
            Please read this Disclaimer carefully before using the {SITE.name} website.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            1. Not Financial Advice
          </h2>
          <p>
            The information contained on this Website and the resources available
            for download through this website are not intended as, and shall not
            be understood or construed as, financial advice. We are not financial
            planners, investment advisors, or brokers.
          </p>
          <p>
            The content on {SITE.name} is provided solely for educational and
            general informational purposes. Nothing on the site constitutes a
            solicitation, recommendation, endorsement, or offer by {SITE.name}
            to buy or sell any cryptocurrencies, tokens, or other financial assets.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            2. High Risk Volatility Warn
          </h2>
          <p>
            Cryptocurrency trading and investment carry a high level of risk and
            may not be suitable for all investors. Before deciding to trade
            cryptocurrency, you should carefully consider your investment
            objectives, level of experience, and risk appetite. The possibility
            exists that you could sustain a loss of some or all of your initial
            investment. You should never invest money that you cannot afford to
            lose.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            3. Data Accuracy & Completeness
          </h2>
          <p>
            While we endeavor to keep the information up-to-date and correct, the
            market data (prices, volume, supply, rankings, etc.) displayed on
            {SITE.name} is sourced from third-party APIs (including CoinGecko).
            We make no representations or warranties of any kind, express or
            implied, about the completeness, accuracy, reliability, suitability, or
            availability with respect to the website or the information, products,
            services, or related graphics contained on the website for any purpose.
          </p>
          <p>
            Any reliance you place on such information is therefore strictly at
            your own risk. Under no circumstances will we be liable for any loss
            or damage, including without limitation, indirect or consequential
            loss or damage, arising from loss of data or profits out of, or in
            connection with, the use of this website.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">
            4. External Links Disclaimer
          </h2>
          <p>
            Through this website, you may be able to link to other websites which
            are not under the control of {SITE.name}. We have no control over the
            nature, content, and availability of those sites. The inclusion of any
            links does not necessarily imply a recommendation or endorse the views
            expressed within them.
          </p>
        </div>
      </div>
    </div>
  )
}
