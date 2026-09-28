import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { JsonLd } from '@/components/ui'
import { absoluteUrl, site } from '@/lib/site'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — School management software for Indian schools`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'school management software',
    'school ERP India',
    'school management system',
    'school fees software',
    'student attendance app',
    'report card software CBSE',
    'parent app for schools',
  ],
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: site.name, locale: site.locale, url: '/' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { themeColor: '#1f6fc5' }

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="flex min-h-svh flex-col">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: site.name,
            url: site.url,
            logo: absoluteUrl('/icon.svg'),
          }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
