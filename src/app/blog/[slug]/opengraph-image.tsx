import { ogImage, ogSize } from '@/components/brand-image'
import { findPost, posts } from '@/content/blog'
import { formatDate } from '@/lib/format'

export const alt = 'Vidyalaya OS blog post'
export const size = ogSize
export const contentType = 'image/png'
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }))

// Each post's link preview shows its own title.
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = findPost((await params).slug)!
  return ogImage(post.title, `Blog · ${formatDate(post.date)}`)
}
