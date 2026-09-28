import type { Metadata } from 'next'
import { LegalPage } from '@/components/LegalPage'
import Terms from '@/content/legal/terms.mdx'

export const metadata: Metadata = {
  title: 'Terms of service',
  description: 'The terms that apply when a school uses Vidyalaya OS.',
  alternates: { canonical: '/terms' },
}

export default function Page() {
  return (
    <LegalPage title="Terms of service">
      <Terms />
    </LegalPage>
  )
}
