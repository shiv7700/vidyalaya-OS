import { ogImage, ogSize } from '@/components/brand-image'
import { site } from '@/lib/site'

export const alt = `${site.name} — school management software for Indian schools`
export const size = ogSize
export const contentType = 'image/png'

// Link preview for WhatsApp, LinkedIn, X etc. Blog posts have their own.
export default function OpengraphImage() {
  return ogImage('Run your whole school from one place.', 'Attendance · Fees · Exams · Timetable · Parents · Library · Transport')
}
