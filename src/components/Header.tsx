import { site } from '@/lib/site'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { ButtonLink, Container } from './ui'

export const mainNav = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-surface">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:rounded focus:bg-surface-overlay focus:px-3 focus:py-2">
        Skip to main content
      </a>
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          <NavLinks items={mainNav} className="hover:text-default" />
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={`${site.appUrl}/login`} className="text-subtle hover:text-default">
            Log in
          </a>
          <ButtonLink href="/contact" className="h-9 px-4">
            Book a demo
          </ButtonLink>
        </div>
        {/* Phones: a disclosure menu — works without JavaScript. */}
        <details className="group relative md:hidden">
          <summary className="flex h-9 cursor-pointer list-none items-center rounded-md border px-3 font-medium [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav aria-label="Main" className="absolute right-0 mt-2 flex w-56 flex-col rounded-lg border bg-surface-overlay p-2 shadow-lg">
            <NavLinks items={mainNav} className="rounded px-3 py-2 hover:bg-neutral" />
            <a href={`${site.appUrl}/login`} className="rounded px-3 py-2 hover:bg-neutral">
              Log in
            </a>
            <ButtonLink href="/contact" className="mt-1 h-10">
              Book a demo
            </ButtonLink>
          </nav>
        </details>
      </Container>
    </header>
  )
}
