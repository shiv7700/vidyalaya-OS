import { JsonLd } from './ui'

export type QA = { q: string; a: string }

// Questions as disclosures, plus FAQPage structured data for search results.
export function Faq({ items }: { items: QA[] }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
        }}
      />
      <div className="divide-y rounded-xl border">
        {items.map((i) => (
          <details key={i.q} className="group px-5 py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {i.q}
              <span aria-hidden="true" className="text-subtle transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-subtle">{i.a}</p>
          </details>
        ))}
      </div>
    </>
  )
}
