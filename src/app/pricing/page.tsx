import type { Metadata } from 'next'
import { CtaBand } from '@/components/CtaBand'
import { Faq, type QA } from '@/components/Faq'
import { ButtonLink, Container, PageIntro } from '@/components/ui'
import { plan } from '@/content/pricing'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Simple pricing for ${site.name}: one plan with every module, priced by the number of students.`,
  alternates: { canonical: '/pricing' },
}

const faq: QA[] = [
  { q: 'Is there a setup fee?', a: 'No. Importing your students and training your staff are included.' },
  { q: 'Do parents or students pay anything?', a: 'No. The school’s subscription covers every login, including parents.' },
  {
    q: 'Can we try it before we decide?',
    a: 'Yes. Book a demo and we’ll walk you through it with your own classes and fee structure.',
  },
  { q: 'What happens to our data if we stop?', a: 'You can export your data, and it is deleted after the period described in our privacy policy.' },
  { q: 'How do we pay?', a: 'We send a GST invoice for the period agreed in your order. See the refund policy for cancellations.' },
]

export default function PricingPage() {
  return (
    <>
      <PageIntro eyebrow="Pricing" title="One plan. Every feature. No surprises.">
        Every school gets the whole system. You pay for the number of students — never per teacher or per parent.
      </PageIntro>
      <Container className="py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border p-8 shadow-sm sm:p-10">
          <h2 className="text-xl font-semibold">{plan.name}</h2>
          <p className="mt-4 flex items-baseline gap-2">
            {plan.price ? (
              <>
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-subtle">{plan.per}</span>
              </>
            ) : (
              <span className="text-3xl font-semibold tracking-tight">Get a quote for your school</span>
            )}
          </p>
          <p className="mt-2 text-subtle">{plan.note}</p>
          <ul className="mt-8 space-y-3">
            {plan.included.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-0.5 text-success">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/contact" className="mt-10 w-full sm:w-auto">
            {plan.price ? 'Book a demo' : 'Get a quote'}
          </ButtonLink>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">Pricing questions</h2>
          <div className="mt-6">
            <Faq items={faq} />
          </div>
        </div>
      </Container>
      <CtaBand pricing={false} />
    </>
  )
}
