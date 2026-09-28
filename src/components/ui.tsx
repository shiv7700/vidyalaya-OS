import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

export function Container({ className = '', ...props }: ComponentProps<'div'>) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`} {...props} />
}

const variants = {
  primary: 'bg-brand-bold text-inverse hover:bg-brand-bold-hovered',
  secondary: 'border border-bold bg-surface text-default hover:bg-neutral',
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: keyof typeof variants }

export function ButtonLink({ variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex h-11 items-center justify-center rounded-md px-5 font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  )
}

// Title block at the top of inner pages.
export function PageIntro({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <header className="border-b bg-surface-sunken">
      <Container className="py-14 sm:py-20">
        {eyebrow && <p className="text-sm font-semibold text-brand">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-lg text-subtle">{children}</div>}
      </Container>
    </header>
  )
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-sm font-semibold text-brand">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-subtle">{children}</p>}
    </div>
  )
}

// Structured data for search engines. `<` is escaped so text can't close the tag.
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
