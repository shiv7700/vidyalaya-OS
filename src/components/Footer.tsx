import Link from 'next/link'
import { site } from '@/lib/site'
import { LogoMark } from './Logo'
import { Container } from './ui'

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/security', label: 'Security' },
      { href: '/contact', label: 'Book a demo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/docs', label: 'Docs' },
      { href: '/docs/faq', label: 'FAQ' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms of service' },
      { href: '/refunds', label: 'Refund policy' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-surface-sunken">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <p className="flex items-center gap-2.5 font-semibold">
            <LogoMark className="size-7" />
            {site.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-subtle">{site.tagline}. Made in India, for Indian schools.</p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold">{col.title}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-subtle hover:text-default">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>
      <Container className="border-t py-6 text-sm text-subtle">
        © {new Date().getFullYear()} {site.company.legalName}. All rights reserved.
      </Container>
    </footer>
  )
}
