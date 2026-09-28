import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import PrivacyPolicy from '@/content/legal/privacy.mdx'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Vidyalaya OS collects, uses and protects the personal data of schools, staff, students and parents, under India’s DPDP Act 2023.',
  alternates: { canonical: '/privacy' },
}

export default function Page() {
  return (
    <LegalPage title="Privacy policy">
      <PrivacyPolicy />
    </LegalPage>
  )
}
