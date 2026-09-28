import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, PageIntro } from '@/components/ui'
import { posts } from '@/content/blog'
import { formatDate } from '@/lib/format'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical guides for running an Indian school: fees, attendance, exams, report cards and data protection.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  return (
    <>
      <PageIntro eyebrow="Blog" title="Guides for running a school">
        Practical, plain-language articles for principals, school owners and office staff.
      </PageIntro>
      <Container className="py-14">
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="block h-full rounded-xl border p-6 hover:bg-neutral">
                <time dateTime={p.date} className="text-sm text-subtle">
                  {formatDate(p.date)}
                </time>
                <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-subtle">{p.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}
