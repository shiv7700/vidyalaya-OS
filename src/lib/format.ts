const dateFormat = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

// "2026-09-24" → "24 September 2026"
export const formatDate = (day: string) => dateFormat.format(new Date(`${day}T00:00:00Z`))
