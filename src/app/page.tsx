import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/CtaBand'
import { Faq, type QA } from '@/components/Faq'
import { Screenshot } from '@/components/Screenshot'
import { ButtonLink, Container, JsonLd, SectionHeading } from '@/components/ui'
import { features } from '@/content/features'
import { site } from '@/lib/site'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const audiences = [
  {
    title: 'For the school office',
    text: 'Fees, admissions, attendance reports, exams, payroll and certificates — and a dashboard that shows what needs doing today.',
  },
  {
    title: 'For teachers',
    text: 'Mark attendance, enter marks, set homework and post notices for your class, all from one “Today” page.',
  },
  {
    title: 'For parents and students',
    text: 'Log in with a mobile number to see attendance, homework, results, fees and receipts — no calls to the office.',
  },
]

const madeForIndia = [
  { title: 'April–March school year', text: 'Exams, fees and bills belong to a session like 2026–27, so names repeat each year.' },
  { title: 'CBSE-style grades', text: 'A1 to E grades, a 33% pass mark in every subject, and ranks with ties handled.' },
  { title: 'Rupees, the Indian way', text: '₹1,23,456 formatting, and receipts with the amount in words — lakh and crore included.' },
  { title: 'Mobile-number logins for parents', text: 'Parents don’t need an email address. Siblings share one login.' },
  { title: 'India time, always', text: 'Every date follows Indian time, even if a laptop’s clock is set to another country.' },
  { title: 'Your data stays yours', text: 'Built with India’s DPDP Act in mind: no ads, no selling data, no tracking of children.' },
]

const shows = features.filter((f) => ['attendance', 'fees', 'exams', 'parents'].includes(f.id))

const faq: QA[] = [
  {
    q: 'What is Vidyalaya OS?',
    a: `${site.name} is school management software for Indian schools. It covers attendance, fees and receipts, exams and report cards, timetable, homework, notices, admissions, staff leave and payroll, library, transport, hostel, ID cards and certificates, with logins for the office, teachers, students and parents.`,
  },
  {
    q: 'Do we need to install anything?',
    a: 'No. It runs in a web browser on the school’s computers. There is nothing to install or maintain on your side.',
  },
  {
    q: 'Can we bring our existing student list?',
    a: 'Yes. You can import students from a CSV file saved from Excel, and parent logins are created at the same time.',
  },
  {
    q: 'How do parents log in?',
    a: 'With their mobile number and a password the class teacher gives them. They choose their own password the first time they log in.',
  },
  {
    q: 'Is our school’s data kept separate from other schools?',
    a: 'Yes. Every record belongs to one school, and every request is checked against the logged-in user’s school, so one school can never see another’s data.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on the number of students. Book a demo or see the pricing page and we’ll send you a quote.',
  },
]

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: site.name,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'Web browser',
          description: site.description,
          url: site.url,
        }}
      />

      <section className="overflow-hidden">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.15fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold text-brand">School management software for India</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Run your whole school from one place.</h1>
            <p className="mt-5 text-lg text-subtle">
              Attendance, fees, exams, timetable, homework and parent updates — simple enough for every teacher, complete enough for
              the office. {site.name} replaces the registers, spreadsheets and phone calls.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">Book a free demo</ButtonLink>
              <ButtonLink href="/features" variant="secondary">
                See all features
              </ButtonLink>
            </div>
          </div>
          <Screenshot src="/screenshots/dashboard.png" alt="Vidyalaya OS school admin dashboard" priority />
        </Container>
      </section>

      <section className="border-y bg-surface-sunken">
        <Container className="grid gap-6 py-14 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title}>
              <h2 className="text-lg font-semibold">{a.title}</h2>
              <p className="mt-2 text-subtle">{a.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <SectionHeading eyebrow="Everything in one place" title="Every part of the school day, connected">
            One set of students, one fee ledger, one timetable — so nothing is typed twice.
          </SectionHeading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <li key={f.id}>
                <Link href={`/features#${f.id}`} className="block h-full rounded-xl border p-5 transition-colors hover:bg-neutral">
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-subtle">{f.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {shows.map((f, i) => (
        <section key={f.id} className={i % 2 ? '' : 'bg-surface-sunken'}>
          <Container className="grid items-center gap-10 py-20 lg:grid-cols-2">
            <div className={i % 2 ? 'lg:order-2' : ''}>
              <SectionHeading eyebrow={f.title} title={f.headline ?? f.title}>
                {f.summary}
              </SectionHeading>
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
                How it works →
              </Link>
            </div>
            {f.screenshot && <Screenshot {...f.screenshot} />}
          </Container>
        </section>
      ))}

      <section className="border-t">
        <Container className="py-20">
          <SectionHeading eyebrow="Made for Indian schools" title="It works the way your school already works" />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {madeForIndia.map((m) => (
              <div key={m.title}>
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-2 text-subtle">{m.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">
            <Link href="/security" className="font-medium text-brand hover:underline">
              How we protect school data →
            </Link>
          </p>
        </Container>
      </section>

      <section className="border-t bg-surface-sunken">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="FAQ" title="Questions schools ask us">
            More answers in the <Link href="/docs/faq" className="text-brand underline">help centre</Link>.
          </SectionHeading>
          <Faq items={faq} />
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
