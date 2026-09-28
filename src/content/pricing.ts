// Pricing shown on /pricing. `price: null` shows "Get a quote" — set a price
// (and `per`) when it's decided.
export const plan = {
  name: 'Vidyalaya OS for your school',
  price: null as string | null, // e.g. '₹40'
  per: 'per student per year',
  note: 'Priced by the number of students. GST extra.',
  included: [
    'Every module: attendance, fees, exams, timetable, homework, notices, admissions, payroll, library, transport, hostel, documents',
    'Unlimited staff, teacher, student and parent logins',
    'Help importing your students, classes and fee structure',
    'Training for the office and teachers',
    'Updates and new features as they ship',
    'Email and phone support during school hours',
  ],
}
