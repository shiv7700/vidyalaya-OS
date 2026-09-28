import { site } from '@/lib/site'
import { ButtonLink, Container } from './ui'

export function CtaBand({ pricing = true }: { pricing?: boolean }) {
  return (
    <section className="border-t bg-surface-sunken">
      <Container className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">See {site.name} with your own school’s data</h2>
          <p className="mt-2 text-lg text-subtle">A 30-minute walkthrough. We’ll set up your classes and fees for the demo.</p>
        </div>
        <div className="flex gap-3">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
          {pricing && (
            <ButtonLink href="/pricing" variant="secondary">
              See pricing
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  )
}
