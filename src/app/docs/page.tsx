import type { Metadata } from 'next'
import Link from 'next/link'
import { docSections } from '@/content/docs'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Documentation',
  description: `Guides for school admins, teachers, students and parents using ${site.name}.`,
  alternates: { canonical: '/docs' },
}

export default function DocsIndex() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Documentation</h1>
      <p className="mt-3 max-w-2xl text-lg text-subtle">
        Step-by-step guides for everyone at your school. New here? Start with{' '}
        <Link href="/docs/getting-started" className="text-brand underline">
          Getting started
        </Link>
        .
      </p>
      <div className="mt-10 flex flex-col gap-10">
        {docSections.map((section) => (
          <section key={section.title} aria-labelledby={`s-${section.title}`}>
            <h2 id={`s-${section.title}`} className="text-lg font-semibold">
              {section.title}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {section.docs.map((d) => (
                <li key={d.slug}>
                  <Link href={`/docs/${d.slug}`} className="block h-full rounded-lg border p-4 hover:bg-neutral">
                    <span className="font-medium">{d.title}</span>
                    <span className="mt-1 block text-sm text-subtle">{d.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
