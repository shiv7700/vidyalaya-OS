import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import Refunds from '@/content/legal/refunds.mdx'

export const metadata: Metadata = {
  title: 'Refund and cancellation policy',
  description: 'How subscriptions, cancellations and refunds work for Vidyalaya OS.',
  alternates: { canonical: '/refunds' },
}

export default function Page() {
  return (
    <LegalPage title="Refund and cancellation policy">
      <Refunds />
    </LegalPage>
  )
}
