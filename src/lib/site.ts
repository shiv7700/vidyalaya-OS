// The first of the given values that's set, as a full URL: an env var left
// empty is skipped, and "example.in" gets "https://" (new URL() would throw
// and fail the build).
function siteUrl(...values: (string | undefined)[]) {
  const value = values.map((v) => v?.trim()).find(Boolean)!
  const url = /^https?:\/\//.test(value) ? value : `https://${value}`
  return url.replace(/\/+$/, '')
}

// Everything about the company and the site in one place. The TODO values
// must be filled in before launch — they appear in the legal pages.
export const site = {
  name: 'Vidyalaya OS',
  tagline: 'The operating system for your school',
  description:
    'Vidyalaya OS is school management software for Indian schools: attendance, fees and receipts, exams and report cards, timetable, homework, parent app, library, transport, hostel and more — in one place.',
  // Where this site and the app live (set per environment). On Vercel the
  // site falls back to the project's production URL.
  url: siteUrl(process.env.NEXT_PUBLIC_SITE_URL, process.env.VERCEL_PROJECT_PRODUCTION_URL, 'http://localhost:3001'),
  appUrl: siteUrl(process.env.NEXT_PUBLIC_APP_URL, undefined, 'http://localhost:5174'),
  locale: 'en_IN',
  company: {
    legalName: '[TODO: company legal name]',
    address: '[TODO: registered office address]',
    email: '[TODO: hello@your-domain]',
    phone: '[TODO: phone number]',
    // Required by India's DPDP Act 2023 for handling privacy complaints.
    grievanceOfficer: '[TODO: name of the grievance officer]',
    grievanceEmail: '[TODO: privacy@your-domain]',
  },
  // Where the app and its database run — stated in the privacy and security pages.
  hosting: '[TODO: hosting provider and region, e.g. a cloud data centre in Mumbai, India]',
  legalUpdated: '28 September 2026',
} as const

export const absoluteUrl = (path: string) => new URL(path, site.url).toString()
