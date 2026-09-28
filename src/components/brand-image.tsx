import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

// Shared drawing for generated images (share previews, the app icon). These
// render through next/og, which needs inline styles and literal colours —
// they match tokens.css: brand #1f6fc5, text #37352f, subtle #5f5e5b.
export const BRAND = '#1f6fc5'

export function MarkSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill={BRAND} />
      <path d="M16 24 32 47 48 24" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 24c3 0 6 1.5 8 4 2-2.5 5-4 8-4" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity=".55" />
      <circle cx="32" cy="15" r="5" fill="#fff" />
    </svg>
  )
}

export const ogSize = { width: 1200, height: 630 }

// A 1200×630 link preview: logo, a headline and a line under it.
export function ogImage(headline: string, subline: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#f7f6f3',
          color: '#37352f',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <MarkSvg size={96} />
          <span style={{ fontSize: 56, fontWeight: 700 }}>{site.name}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>{headline}</span>
          <span style={{ fontSize: 30, color: '#5f5e5b' }}>{subline}</span>
        </div>
      </div>
    ),
    ogSize,
  )
}
