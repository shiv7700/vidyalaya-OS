import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ButtonLink, Container, JsonLd } from '@/components/ui'
import { findPost, posts } from '@/content/blog'
import { formatDate } from '@/lib/format'
import { absoluteUrl, site } from '@/lib/site'

export const dynamicParams = false
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }))

export async function generateMetadata({ params }: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const post = findPost((await params).slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', publishedTime: post.date, title: post.title, description: post.description },
  }
}

export default async function PostPage({ params }: PageProps<'/blog/[slug]'>) {
  const { slug } = await params
  const post = findPost(slug)
  if (!post) notFound()
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`)

  return (
    <Container className="max-w-3xl py-14">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Organization', name: post.author },
          publisher: { '@type': 'Organization', name: site.name, logo: absoluteUrl('/icon.svg') },
          mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        }}
      />
      <Link href="/blog" className="text-sm text-brand hover:underline">
        ← All articles
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-subtle">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.author}
      </p>
      <div className="prose mt-8">
        <Content />
      </div>
      <aside className="mt-14 rounded-xl border bg-surface-sunken p-6">
        <p className="text-lg font-semibold">See how {site.name} handles this for your school</p>
        <p className="mt-1 text-subtle">A 30-minute walkthrough with your own classes and fee structure.</p>
        <ButtonLink href="/contact" className="mt-4">
          Book a demo
        </ButtonLink>
      </aside>
    </Container>
  )
}
