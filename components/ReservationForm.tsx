"use client"
import { useState } from 'react'
import CarpetFrame from './CarpetFrame'

type ReservationPayload = {
  name: string
  email: string
  phone: string
  partySize: number
  date: string
  time: string
  notes?: string
}

export default function ReservationForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [confirmationId, setConfirmationId] = useState<string | null>(null)
  const [form, setForm] = useState<ReservationPayload>({
    name: '',
    email: '',
    phone: '',
    partySize: 2,
    date: '',
    time: '',
    notes: '',
  })

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      const json = await res.json()
      setConfirmationId(json.id)
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  function update<T extends keyof ReservationPayload>(key: T, value: ReservationPayload[T]) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  if (status === 'success') {
    return (
      <CarpetFrame className="p-6 bg-cream/80">
        <h3 className="text-xl font-heading">Reservation received!</h3>
        <p className="mt-2 text-brown/70">Your confirmation id: <span className="font-semibold">{confirmationId}</span>.</p>
        <p className="mt-1 text-brown/70">We will email you a confirmation shortly.</p>
      </CarpetFrame>
    )
  }

  return (
    <CarpetFrame className="p-6 bg-cream/80">
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="input" value={form.name} onChange={(e) => update('name', e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="input" value={form.email} onChange={(e) => update('email', e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <input className="input" value={form.phone} onChange={(e) => update('phone', e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Party size</label>
          <input type="number" min={1} max={20} className="input" value={form.partySize} onChange={(e) => update('partySize', Number(e.target.value))} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Date</label>
          <input type="date" className="input" value={form.date} onChange={(e) => update('date', e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1">Time</label>
          <input type="time" className="input" value={form.time} onChange={(e) => update('time', e.target.value)} required />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Notes (optional)</label>
          <textarea className="input min-h-[96px]" value={form.notes} onChange={(e) => update('notes', e.target.value)} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="bg-olive hover:opacity-90 text-cream px-5 py-2 rounded shadow" disabled={status==='submitting'}>
            {status === 'submitting' ? 'Submitting…' : 'Reserve'}
          </button>
          {status === 'error' && <p className="text-ruby">Something went wrong. Please try again or call us.</p>}
        </div>
      </form>
    </CarpetFrame>
  )
}


