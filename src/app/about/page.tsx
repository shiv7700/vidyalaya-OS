import type { Metadata } from 'next'
import { CtaBand } from '@/components/CtaBand'
import { Container, PageIntro } from '@/components/ui'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About us',
  description: `Why we build ${site.name}: simple, honest school management software for Indian schools.`,
  alternates: { canonical: '/about' },
}

const beliefs = [
  {
    title: 'Simple beats complete',
    text: 'A teacher should mark attendance in under a minute without training. If a feature needs a manual, we haven’t finished it.',
  },
  {
    title: 'The school owns its data',
    text: 'We never sell data, show ads or track children. You can take your data with you whenever you want.',
  },
  {
    title: 'Built for how Indian schools work',
    text: 'April–March sessions, CBSE-style grades, fee concessions, parents without email addresses — the details matter.',
  },
  {
    title: 'Honest pricing',
    text: 'One plan with everything in it, priced by students. No per-teacher fees, no paid add-ons for basics.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="We make running a school simpler">
        {site.name} gives the office, teachers and parents one place for the school day — so time goes to students, not registers.
      </PageIntro>
      <Container className="max-w-3xl py-16">
        <div className="prose">
          <h2>Why we built {site.name}</h2>
          <p>
            Many schools still run on paper registers, spreadsheets, a fee book and a lot of phone calls. School software is often
            either too complicated for teachers or too thin for the office. We set out to build something a class teacher
            can use on the first day, that still handles fees, exams, timetables and payroll properly.
          </p>
          <p>
            Every part of {site.name} is connected. A student admitted from an enquiry gets a login, a fee ledger and a place in the
            register at once. A transfer certificate marks them as having left. Parents see the same information the school does —
            which means fewer calls to the office.
          </p>
        </div>
        <h2 className="mt-14 text-2xl font-semibold tracking-tight">What we believe</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {beliefs.map((b) => (
            <div key={b.title} className="rounded-xl border p-5">
              <h3 className="font-semibold">{b.title}</h3>
              <p className="mt-2 text-subtle">{b.text}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-14 text-2xl font-semibold tracking-tight">Company</h2>
        <dl className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-[10rem_1fr]">
          <dt className="text-subtle">Legal name</dt>
          <dd>{site.company.legalName}</dd>
          <dt className="text-subtle">Address</dt>
          <dd>{site.company.address}</dd>
          <dt className="text-subtle">Email</dt>
          <dd>{site.company.email}</dd>
        </dl>
      </Container>
      <CtaBand />
    </>
  )
}
