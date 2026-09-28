import type { MetadataRoute } from 'next'
import { posts } from '@/content/blog'
import { allDocs } from '@/content/docs'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/features', '/pricing', '/contact', '/about', '/docs', '/blog', '/security', '/privacy', '/terms', '/refunds']
  return [
    ...pages.map((p) => ({ url: absoluteUrl(p || '/'), changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...allDocs.map((d) => ({ url: absoluteUrl(`/docs/${d.slug}`), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: p.date, priority: 0.6 })),
  ]
}
