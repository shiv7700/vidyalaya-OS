import type { Metadata } from 'next'
import { ButtonLink, Container } from '@/components/ui'

export const metadata: Metadata = { title: 'Page not found', robots: { index: false } }

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold text-brand">404</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">We couldn’t find that page</h1>
      <p className="mt-3 text-subtle">It may have moved. Try the home page or the help centre.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/docs" variant="secondary">
          Help centre
        </ButtonLink>
      </div>
    </Container>
  )
}
