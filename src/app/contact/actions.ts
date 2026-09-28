'use server'

export type DemoState = { ok: boolean; error?: string; fields?: Record<string, string> }

const API = process.env.API_URL ?? 'http://localhost:3000/api'

// Sends "Book a demo" to the backend (POST /public/demo-requests) from the
// server, so the API URL isn't exposed and no CORS is needed.
export async function requestDemo(_prev: DemoState, form: FormData): Promise<DemoState> {
  const fields = Object.fromEntries(
    ['schoolName', 'contactName', 'role', 'phone', 'email', 'city', 'students', 'message', 'website'].map((k) => [
      k,
      String(form.get(k) ?? '').trim(),
    ]),
  )
  const required = ['schoolName', 'contactName', 'role', 'phone', 'city', 'students']
  if (required.some((k) => !fields[k])) return { ok: false, error: 'Please fill in all the required fields.', fields }

  try {
    const res = await fetch(`${API}/public/demo-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...fields, email: fields.email || undefined, message: fields.message || undefined, website: fields.website || undefined }),
      cache: 'no-store',
    })
    if (res.ok) return { ok: true }
    const body = await res.json().catch(() => ({}))
    const message = Array.isArray(body.message) ? body.message.join('. ') : body.message
    return { ok: false, error: res.status === 429 ? 'Too many requests right now. Please try again in a minute.' : message || 'Something went wrong. Please try again.', fields }
  } catch {
    return { ok: false, error: 'We couldn’t send your request just now. Please try again, or email us.', fields }
  }
}
