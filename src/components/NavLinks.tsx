'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Item = { href: string; label: string }

// Header links, with the current section highlighted (/docs/fees → Docs).
export function NavLinks({ items, className }: { items: Item[]; className: string }) {
  const path = usePathname()
  return items.map((item) => {
    const current = path === item.href || path.startsWith(`${item.href}/`)
    return (
      <Link key={item.href} href={item.href} aria-current={current ? 'page' : undefined} className={`${className} ${current ? 'font-medium text-default' : 'text-subtle'}`}>
        {item.label}
      </Link>
    )
  })
}
