// Every module, as described on the home and features pages. Keep this in
// step with the app — only list what's built.
export type Feature = {
  id: string
  title: string
  headline?: string // short heading for the home page showcase
  summary: string
  points: string[]
  doc: string // help-centre slug
  screenshot?: { src: string; alt: string }
}

export const features: Feature[] = [
  {
    id: 'attendance',
    title: 'Attendance',
    headline: 'Attendance in under a minute',
    summary: 'Class teachers mark the day in under a minute; the office sees every section at a glance.',
    points: [
      'Present, Late, Absent or On leave — everyone starts present, tap the exceptions',
      'Sundays and school holidays are closed automatically',
      'Daily report of which sections are marked, with the office able to mark any section',
      'Parents see the day’s status on their home page, with a clear alert when their child is absent',
    ],
    doc: 'attendance',
    screenshot: { src: '/screenshots/attendance.png', alt: 'Attendance register for Class 5-A with Present, Late, Absent and Leave for each student' },
  },
  {
    id: 'fees',
    title: 'Fees and receipts',
    headline: 'Collect fees without the fee book',
    summary: 'Bill a class in one go, record payments by cash, UPI, card, bank transfer or cheque, and print receipts.',
    points: [
      'Bill a whole class, one section or a single student (fines, lost books)',
      'Numbered receipts with the amount in words and your school’s letterhead',
      'Concessions with a reason, and voiding a wrong receipt without deleting it',
      'Overdue fees and the amount to collect on the dashboard; parents see their dues',
    ],
    doc: 'fees',
    screenshot: { src: '/screenshots/fees.png', alt: 'Fees page with totals billed, collected and outstanding, and each student’s balance' },
  },
  {
    id: 'exams',
    title: 'Exams and report cards',
    headline: 'Report cards that add up',
    summary: 'Teachers enter marks subject by subject; totals, grades and ranks are worked out for you.',
    points: [
      'CBSE-style grades (A1 to E) and a 33% pass mark in every subject',
      'Half marks, absentees and ranks with ties handled correctly',
      'Subject teachers enter marks for the classes they teach',
      'Printable report cards with attendance and the class teacher’s remarks',
    ],
    doc: 'exams',
    screenshot: { src: '/screenshots/report-card.png', alt: 'Printable report card with marks, grade, rank, attendance and remarks' },
  },
  {
    id: 'parents',
    title: 'Parent and student access',
    headline: 'Parents stay in the loop',
    summary: 'Families log in with a mobile number and see everything about their child in one place.',
    points: [
      'Attendance, homework, results, fees and receipts, library books, bus and hostel details',
      'One login for brothers and sisters; both parents can have access',
      'A summary of what needs attention: absent today, homework due, fees due',
    ],
    doc: 'parents',
    screenshot: { src: '/screenshots/parent.png', alt: 'Parent’s home page with a card for their child showing today’s attendance, homework and fees' },
  },
  {
    id: 'timetable',
    title: 'Timetable',
    summary: 'Set bell timings and each section’s week; the system stops a teacher being in two rooms at once.',
    points: ['Up to 12 periods a day, Monday to Saturday', 'Teachers see their teaching week; students and parents see the class week'],
    doc: 'timetable',
    screenshot: { src: '/screenshots/timetable.png', alt: 'Weekly timetable grid for a section' },
  },
  {
    id: 'homework',
    title: 'Homework and notices',
    summary: 'Teachers set homework for the sections they teach; notices reach exactly the right people.',
    points: [
      'Homework with a subject, details and due date',
      'Notices to everyone, only staff, only families, or one section',
      'Links in notices and homework are clickable',
    ],
    doc: 'teachers',
  },
  {
    id: 'admissions',
    title: 'Admissions',
    summary: 'Track every enquiry from the first call to the first day, with a public form for your website.',
    points: [
      'New → Contacted → Visit scheduled → Admitted, with follow-up dates and notes',
      'Admit in one step: the student and the parent login are created for you',
    ],
    doc: 'admissions',
  },
  {
    id: 'staff',
    title: 'Staff leave and payroll',
    summary: 'Teachers apply for leave; the office approves it and runs monthly payroll with payslips.',
    points: ['Casual, sick, earned and unpaid leave; holidays and Sundays aren’t counted', 'Unpaid leave deducted automatically; printable payslips'],
    doc: 'staff',
  },
  {
    id: 'library',
    title: 'Library, transport and hostel',
    summary: 'Book loans, bus routes and hostel rooms — with the monthly fees billed straight into Fees.',
    points: [
      'Issue and return books with due dates and overdue lists',
      'Bus routes, stops and pickup times; a printable rider list per route',
      'Hostel rooms and beds that can’t be over-filled',
    ],
    doc: 'library-transport-hostel',
  },
  {
    id: 'documents',
    title: 'ID cards and certificates',
    summary: 'Print card-sized ID cards for a whole section, and numbered bonafide and transfer certificates.',
    points: ['Real ID-card size with cut lines, validity date and emergency contact', 'A transfer certificate marks the student as having left'],
    doc: 'documents',
  },
  {
    id: 'students',
    title: 'Students and year end',
    summary: 'A full profile for every student, and year-end changes without re-typing anything.',
    points: [
      'Import a class from Excel (CSV), with parent logins created for you',
      'Move a student to another section, mark them as left, or bring them back',
      'Move a whole section up at year end; the April–March school year is built in',
    ],
    doc: 'year-end',
  },
  {
    id: 'dashboard',
    title: 'A dashboard that tells you what to do',
    summary: 'Overdue fees, leave waiting, new enquiries, overdue books and unmarked attendance — each one a click away.',
    points: ['Teachers get a “Today” page: attendance, their periods and quick links'],
    doc: 'getting-started',
    screenshot: { src: '/screenshots/dashboard.png', alt: 'School admin dashboard with today’s attendance and a list of things that need attention' },
  },
]
