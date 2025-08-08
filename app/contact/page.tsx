import Section from '@/components/Section'
import Map from '@/components/Map'
import site from '@/data/site.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact, hours, and location for Nature Village'
}

export default function ContactPage() {
  return (
    <>
      <Section id="contact" title="Contact" subtitle="We'd love to hear from you">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="font-semibold">Phone: {site.phone}</p>
            <p>{site.address}</p>
            <p>Hours: {site.hoursSummary}</p>
            <a href={`tel:${site.phone.replace(/[^\d]/g, '')}`} className="underline">
              Call now
            </a>
            <form action="/api/contact" method="post" className="grid gap-3 mt-4">
              <input name="name" placeholder="Name" required className="input" />
              <input name="email" type="email" placeholder="Email" required className="input" />
              <input name="phone" placeholder="Phone" className="input" />
              <textarea name="message" placeholder="Message" rows={4} className="input" />
              <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />
              <button className="bg-olive text-cream px-4 py-2 rounded shadow hover:opacity-90">
                Send
              </button>
            </form>
          </div>
          <Map />
        </div>
      </Section>
    </>
  )
}


