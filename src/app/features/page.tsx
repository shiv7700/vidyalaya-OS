import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { Screenshot } from '@/components/Screenshot'
import { Container, PageIntro } from '@/components/ui'
import { features } from '@/content/features'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Features',
  description: `Everything in ${site.name}: attendance, fees and receipts, exams and report cards, timetable, homework, notices, admissions, payroll, library, transport, hostel, ID cards and certificates.`,
  alternates: { canonical: '/features' },
}

export default function FeaturesPage() {
  return (
    <>
      <PageIntro eyebrow="Features" title="Everything your school runs on, in one system">
        Each part works with the others: a fee billed from Transport shows up in the student’s ledger, a transfer certificate marks
        the student as left, and parents see it all.
      </PageIntro>
      <Container className="py-8">
        <nav aria-label="On this page" className="flex flex-wrap gap-2 py-4">
          {features.map((f) => (
            <a key={f.id} href={`#${f.id}`} className="rounded-full border px-3 py-1 text-sm text-subtle hover:bg-neutral hover:text-default">
              {f.title}
            </a>
          ))}
        </nav>
      </Container>
      {features.map((f, i) => (
        <section key={f.id} id={f.id} aria-labelledby={`${f.id}-title`} className={`scroll-mt-20 border-t ${i % 2 ? 'bg-surface-sunken' : ''}`}>
          <Container className={`grid items-start gap-10 py-16 ${f.screenshot ? 'lg:grid-cols-2' : ''}`}>
            <div className="max-w-2xl">
              <h2 id={`${f.id}-title`} className="text-2xl font-semibold tracking-tight">
                {f.title}
              </h2>
              <p className="mt-3 text-lg text-subtle">{f.summary}</p>
              <ul className="mt-6 space-y-3">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="mt-0.5 text-success">
                      ✓
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/docs/${f.doc}`} className="mt-6 inline-block font-medium text-brand hover:underline">
                Read the guide →
              </Link>
            </div>
            {f.screenshot && <Screenshot {...f.screenshot} />}
          </Container>
        </section>
      ))}
      <CtaBand />
    </>
  )
}
