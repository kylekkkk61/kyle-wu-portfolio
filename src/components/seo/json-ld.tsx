type Props = {
  data: Record<string, unknown>
}

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD script tag injection
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
