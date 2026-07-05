/**
 * Injects a JSON-LD structured data block.
 * Google supports JSON-LD anywhere in the document (head or body).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
