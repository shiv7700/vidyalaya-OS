import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/ui'
import { allDocs, findDoc } from '@/content/docs'
import { absoluteUrl } from '@/lib/site'

export const dynamicParams = false
export const generateStaticParams = () => allDocs.map((d) => ({ slug: d.slug }))

export async function generateMetadata({ params }: PageProps<'/docs/[slug]'>): Promise<Metadata> {
  const doc = findDoc((await params).slug)
  if (!doc) return {}
  return { title: doc.title, description: doc.description, alternates: { canonical: `/docs/${doc.slug}` } }
}

export default async function DocPage({ params }: PageProps<'/docs/[slug]'>) {
  const { slug } = await params
  const doc = findDoc(slug)
  if (!doc) notFound()
  const { default: Content } = await import(`@/content/docs/${slug}.mdx`)
  const i = allDocs.indexOf(doc)
  const [prev, next] = [allDocs[i - 1], allDocs[i + 1]]

  return (
    <article>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: doc.title,
          description: doc.description,
          url: absoluteUrl(`/docs/${doc.slug}`),
        }}
      />
      <h1 className="text-3xl font-semibold tracking-tight">{doc.title}</h1>
      <p className="mt-3 text-lg text-subtle">{doc.description}</p>
      <div className="prose mt-8">
        <Content />
      </div>
      <nav aria-label="More docs" className="mt-14 flex justify-between gap-4 border-t pt-6 text-sm">
        {prev ? (
          <Link href={`/docs/${prev.slug}`} className="text-brand hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/docs/${next.slug}`} className="text-right text-brand hover:underline">
            {next.title} →
          </Link>
        )}
      </nav>
    </article>
  )
}
