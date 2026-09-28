import Link from 'next/link'
import { Container } from '@/components/ui'
import { docSections } from '@/content/docs'

// Help centre: section list on the left, the article on the right.
export default function DocsLayout({ children }: LayoutProps<'/docs'>) {
  return (
    <Container className="grid gap-10 py-10 lg:grid-cols-[15rem_1fr] lg:py-14">
      <nav aria-label="Docs" className="lg:sticky lg:top-24 lg:self-start">
        <Link href="/docs" className="font-semibold">
          Documentation
        </Link>
        <div className="mt-4 flex flex-col gap-5">
          {docSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs font-semibold tracking-wide text-subtle uppercase">{section.title}</h2>
              <ul className="mt-2 space-y-1.5 text-sm">
                {section.docs.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/docs/${d.slug}`} className="text-subtle hover:text-default">
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
      <div className="min-w-0">{children}</div>
    </Container>
  )
}
