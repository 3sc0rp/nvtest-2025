import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catering',
  description: 'Event catering by Nature Village'
}

export default function CateringPage() {
  return (
    <>
      <Section id="catering" title="Catering & Events" subtitle="Bring Nature Village to your event">
        <form
          action="/api/catering"
          method="post"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-sand p-6 rounded-lg"
        >
          <input type="text" name="name" placeholder="Name" required className="input" />
          <input type="email" name="email" placeholder="Email" required className="input" />
          <input type="tel" name="phone" placeholder="Phone" className="input md:col-span-2" />
          <input type="date" name="eventDate" className="input" />
          <input type="number" name="headcount" placeholder="Headcount" className="input" />
          <input type="text" name="budget" placeholder="Budget" className="input md:col-span-2" />
          <textarea name="notes" placeholder="Notes" className="input md:col-span-2" rows={4} />
          <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />
          <button className="bg-olive text-cream px-4 py-2 rounded shadow hover:opacity-90 md:col-span-2">
            Submit Inquiry
          </button>
        </form>
      </Section>
    </>
  )
}


