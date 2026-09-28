// The help centre. Each entry has a matching src/content/docs/<slug>.mdx.
export type Doc = { slug: string; title: string; description: string }
export type DocSection = { title: string; docs: Doc[] }

export const docSections: DocSection[] = [
  {
    title: 'Getting started',
    docs: [
      { slug: 'getting-started', title: 'Getting started', description: 'Set up your school in Vidyalaya OS in an afternoon: classes, teachers, students and parents.' },
      { slug: 'logging-in', title: 'Logging in and passwords', description: 'How staff, students and parents log in, and what to do when someone forgets a password.' },
      { slug: 'importing-students', title: 'Importing students from Excel', description: 'Add a whole class at once from a CSV file, with parent logins.' },
    ],
  },
  {
    title: 'For school admins',
    docs: [
      { slug: 'classes-and-teachers', title: 'Classes, sections and teachers', description: 'Create classes and sections, add teachers and assign class teachers.' },
      { slug: 'attendance', title: 'Attendance and holidays', description: 'Daily attendance, the Late and Leave statuses, holidays and reports.' },
      { slug: 'fees', title: 'Fees, receipts and concessions', description: 'Bill a class or a student, record payments, print receipts, give concessions.' },
      { slug: 'exams', title: 'Exams and report cards', description: 'Create exams, enter marks, CBSE-style grades, ranks, remarks and printable report cards.' },
      { slug: 'timetable', title: 'Timetable', description: 'Bell timings and each section’s weekly timetable, without clashes.' },
      { slug: 'admissions', title: 'Admissions', description: 'Track enquiries from the first call to admission, with a public enquiry form.' },
      { slug: 'staff', title: 'Leave and payroll', description: 'Teacher leave requests, monthly payroll and payslips.' },
      { slug: 'library-transport-hostel', title: 'Library, transport and hostel', description: 'Book loans, bus routes and stops, hostel rooms and monthly fees.' },
      { slug: 'documents', title: 'ID cards and certificates', description: 'Print ID cards, bonafide and transfer certificates.' },
      { slug: 'year-end', title: 'Year end and student changes', description: 'Promote classes, move students, mark students as left, and more.' },
    ],
  },
  {
    title: 'For teachers',
    docs: [
      { slug: 'teachers', title: 'A teacher’s day', description: 'Your class, attendance, marks, homework and notices.' },
    ],
  },
  {
    title: 'For students and parents',
    docs: [
      { slug: 'parents', title: 'Guide for parents and students', description: 'See attendance, homework, results, fees and more for your child.' },
    ],
  },
  {
    title: 'Help',
    docs: [{ slug: 'faq', title: 'Frequently asked questions', description: 'Answers to common questions about Vidyalaya OS.' }],
  },
]

export const allDocs = docSections.flatMap((s) => s.docs)
export const findDoc = (slug: string) => allDocs.find((d) => d.slug === slug)
