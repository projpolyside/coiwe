export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CoinClash",
  url: "https://coinclash.app",
  description:
    "Independent cryptocurrency comparison platform with transparent methodology.",
  publisher: {
    "@type": "Organization",
    name: "CoinClash",
  },
})

export const generateArticleSchema = (
  title: string,
  date: string,
  excerpt: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  datePublished: date,
  author: {
    "@type": "Organization",
    name: "CoinClash Editorial Team",
  },
  description: excerpt,
})
