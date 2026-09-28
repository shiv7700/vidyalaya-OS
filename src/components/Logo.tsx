import Link from 'next/link'
import { site } from '@/lib/site'

// Same mark as the app (frontend/src/components/ui/Logo.tsx): a "V" that is
// also an open book, with a dot above — a student with arms raised.
export function LogoMark({ className = 'size-8' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 rounded-[22%] bg-brand-bold text-inverse ${className}`}>
      <svg viewBox="0 0 64 64" className="size-full">
        <path d="M16 24 32 47 48 24" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M24 24c3 0 6 1.5 8 4 2-2.5 5-4 8-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".55"
        />
        <circle cx="32" cy="15" r="5" fill="currentColor" />
      </svg>
    </span>
  )
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-lg font-semibold">
      <LogoMark />
      {site.name}
    </Link>
  )
}
