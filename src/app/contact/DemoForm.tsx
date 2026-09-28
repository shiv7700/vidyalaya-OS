'use client'

import Link from 'next/link'
import { useActionState, useId, type ComponentProps } from 'react'
import { requestDemo, type DemoState } from './actions'

const ROLES = ['Principal', 'Owner / trustee', 'Administrator', 'Teacher', 'Other']
// Same values as the backend's STUDENT_RANGES.
const STUDENTS = ['Under 300', '300–1,000', '1,000–3,000', 'Over 3,000']

const inputClass =
  'h-11 w-full rounded-md border border-input bg-input px-3 text-default placeholder:text-subtlest focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-focused'

function Field({ label, optional, ...props }: ComponentProps<'input'> & { label: string; optional?: boolean }) {
  const id = useId()
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {optional && <span className="font-normal text-subtle">(optional)</span>}
      </label>
      <input id={id} className={inputClass} required={!optional} {...props} />
    </div>
  )
}

function Choice({ label, name, options, defaultValue }: { label: string; name: string; options: string[]; defaultValue?: string }) {
  const id = useId()
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <select id={id} name={name} required defaultValue={defaultValue ?? ''} className={inputClass}>
        <option value="" disabled>
          Choose…
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}

export function DemoForm() {
  const [state, action, pending] = useActionState<DemoState, FormData>(requestDemo, { ok: false })
  const f = state.fields ?? {}

  if (state.ok) {
    return (
      <div role="status" className="rounded-xl border bg-success p-6 text-success">
        <p className="text-lg font-semibold">Thank you — we’ve got your request.</p>
        <p className="mt-1">We’ll call you soon to fix a time for the demo.</p>
      </div>
    )
  }

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Field label="School name" name="schoolName" maxLength={200} defaultValue={f.schoolName} autoComplete="organization" />
      </div>
      <Field label="Your name" name="contactName" maxLength={200} defaultValue={f.contactName} autoComplete="name" />
      <Choice label="Your role" name="role" options={ROLES} defaultValue={f.role} />
      <Field label="Mobile number" name="phone" type="tel" inputMode="tel" pattern="[+0-9 \-]{10,16}" title="A 10-digit mobile number" defaultValue={f.phone} autoComplete="tel" />
      <Field label="Email" name="email" type="email" optional maxLength={254} defaultValue={f.email} autoComplete="email" />
      <Field label="City" name="city" maxLength={100} defaultValue={f.city} autoComplete="address-level2" />
      <Choice label="Number of students" name="students" options={STUDENTS} defaultValue={f.students} />
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label htmlFor="demo-message" className="text-sm font-medium">
          Anything we should know? <span className="font-normal text-subtle">(optional)</span>
        </label>
        <textarea id="demo-message" name="message" rows={4} maxLength={2000} defaultValue={f.message} className={`${inputClass} h-auto py-2`} />
      </div>
      {/* Honeypot: hidden from people, so only bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {state.error && (
        <p role="alert" className="rounded-md border border-danger bg-danger px-3 py-2 text-danger sm:col-span-2">
          {state.error}
        </p>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 items-center justify-center rounded-md bg-brand-bold px-6 font-medium text-inverse hover:bg-brand-bold-hovered disabled:opacity-60"
        >
          {pending ? 'Sending…' : 'Book my demo'}
        </button>
        <p className="mt-3 text-sm text-subtle">
          We use these details only to arrange your demo. See our{' '}
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  )
}
