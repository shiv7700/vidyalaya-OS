import { ImageResponse } from 'next/og'
import { MarkSvg } from '@/components/brand-image'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

// iPhone/iPad home-screen icon (PNG, generated at build time).
export default function AppleIcon() {
  return new ImageResponse(<MarkSvg size={180} />, size)
}
