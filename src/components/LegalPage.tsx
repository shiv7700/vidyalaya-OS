import type { ReactNode } from 'react'
import { Container, PageIntro } from './ui'
import { site } from '@/lib/site'

// Shared frame for privacy, terms, refunds and security pages.
export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageIntro eyebrow="Legal" title={title}>
        Last updated {site.legalUpdated}.
      </PageIntro>
      <Container className="max-w-3xl py-14">
        <div className="prose">{children}</div>
      </Container>
    </>
  )
}
