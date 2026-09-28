import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import Security from '@/content/legal/security.mdx'

export const metadata: Metadata = {
  title: 'Security and data protection',
  description: 'How Vidyalaya OS keeps school data safe: access control, isolation between schools, encryption and backups.',
  alternates: { canonical: '/security' },
}

export default function Page() {
  return (
    <LegalPage title="Security and data protection">
      <Security />
    </LegalPage>
  )
}
