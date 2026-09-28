import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

// Same security headers as the app (see frontend/vite.config.ts).
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

const nextConfig: NextConfig = {
  // Docs and blog posts are .mdx files in src/content, imported by their pages.
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

// remark-gfm: markdown tables and auto-links in docs, blog and legal pages.
// Plugins are named as strings so they work with Turbopack.
export default createMDX({ options: { remarkPlugins: ['remark-gfm'] } })(nextConfig)
