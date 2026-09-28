// Blog posts, newest first. Each has a matching src/content/blog/<slug>.mdx.
export type Post = { slug: string; title: string; description: string; date: string; author: string }

export const posts: Post[] = [
  {
    slug: 'cbse-grading-explained',
    title: 'CBSE grading explained: marks, grades and pass marks',
    description: 'How the A1–E grade scale works, what 33% means, and how to turn marks into a report card without mistakes.',
    date: '2026-09-24',
    author: 'Vidyalaya OS team',
  },
  {
    slug: 'school-fee-collection-guide',
    title: 'A practical guide to school fee collection',
    description: 'Fewer defaulters and a calmer office: billing, receipts, concessions and reminders that work for Indian schools.',
    date: '2026-09-17',
    author: 'Vidyalaya OS team',
  },
  {
    slug: 'digital-attendance-for-schools',
    title: 'Moving attendance off paper registers',
    description: 'What changes when teachers mark attendance in the browser instead of a paper register — and how parents benefit the same day.',
    date: '2026-09-10',
    author: 'Vidyalaya OS team',
  },
  {
    slug: 'dpdp-act-for-schools',
    title: 'The DPDP Act 2023: what it means for schools',
    description: 'India’s data protection law in plain words: children’s data, parental consent, and what to ask your software vendor.',
    date: '2026-09-03',
    author: 'Vidyalaya OS team',
  },
]

export const findPost = (slug: string) => posts.find((p) => p.slug === slug)
