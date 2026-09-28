import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

// Internal links in MDX use next/link; everything is styled by `.prose`.
const components: MDXComponents = {
  a: ({ href = '', ...props }) =>
    href.startsWith('/') ? <Link href={href} {...props} /> : <a href={href} target="_blank" rel="noreferrer" {...props} />,
}

export function useMDXComponents(): MDXComponents {
  return components
}
