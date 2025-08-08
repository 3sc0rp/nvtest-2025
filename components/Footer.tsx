"use client"
import { useState } from 'react'
import site from '@/data/site.json'

export default function Footer() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <footer className="border-t border-brown/10 bg-cream">
      <div className="container-grid py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-heading text-lg">Nature Village</h3>
          <p className="mt-2 text-brown/70">{site.address}</p>
          <p className="mt-1">
            <a href={`tel:${site.phone.replace(/[^\d]/g, '')}`} className="underline">
              {site.phone}
            </a>
          </p>
          <p className="mt-1">Hours: {site.hoursSummary}</p>
        </div>
        <div>
          <h4 className="font-semibold">Navigate</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order</a></li>
            <li><a href="/catering">Catering</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/tos">Terms</a></li>
          </ul>
        </div>
        <div aria-live="polite">
          <h4 className="font-semibold">Newsletter</h4>
          {submitted ? (
            <p className="mt-2 text-green-700">Thanks! You’re on the list.</p>
          ) : (
            <form
              className="mt-2 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <input placeholder="Email" type="email" required className="input flex-1" />
              <button className="bg-olive text-cream px-3 rounded">Join</button>
            </form>
          )}
        </div>
      </div>
      <div className="text-center text-xs py-4 text-brown/60">© {new Date().getFullYear()} Nature Village</div>
    </footer>
  )
}


