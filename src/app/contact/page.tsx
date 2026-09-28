import type { Metadata } from 'next'
import { Container, PageIntro } from '@/components/ui'
import { site } from '@/lib/site'
import { DemoForm } from './DemoForm'

export const metadata: Metadata = {
  title: 'Book a demo',
  description: `See ${site.name} with your own school’s classes and fees. Book a free 30-minute demo.`,
  alternates: { canonical: '/contact' },
}

const steps = [
  'We call you to understand your school: classes, fee structure, what you use today.',
  'We show you Vidyalaya OS set up for a school like yours — about 30 minutes.',
  'If it fits, we import your students and train your office and teachers.',
]

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Book a demo" title="See it with your own school">
        Tell us a little about your school and we’ll arrange a free walkthrough.
      </PageIntro>
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <DemoForm />
        <aside>
          <h2 className="text-lg font-semibold">What happens next</h2>
          <ol className="mt-4 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-neutral font-semibold">{i + 1}</span>
                <span className="text-subtle">{s}</span>
              </li>
            ))}
          </ol>
          <h2 className="mt-10 text-lg font-semibold">Other ways to reach us</h2>
          <dl className="mt-3 space-y-1 text-subtle">
            <div>
              <dt className="inline">Email: </dt>
              <dd className="inline">{site.company.email}</dd>
            </div>
            <div>
              <dt className="inline">Phone: </dt>
              <dd className="inline">{site.company.phone}</dd>
            </div>
          </dl>
        </aside>
      </Container>
    </>
  )
}
