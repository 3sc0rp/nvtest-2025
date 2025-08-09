import Section from '@/components/Section'
import ReservationForm from '@/components/ReservationForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'Book your table at Nature Village'
}

export default function ReservationsPage() {
  return (
    <>
      <Section id="reservations" title="Reservations" subtitle="Book your table" pattern="rug" patternIntensity="soft" framedHeading>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ReservationForm />
          <div className="space-y-4">
            <div className="carpet-frame p-4 bg-cream/70">
              <h3 className="font-heading text-lg">Policies</h3>
              <ul className="list-disc pl-5 text-sm mt-2 text-brown/80 space-y-1">
                <li>We hold tables for 15 minutes past reservation time.</li>
                <li>Parties of 8+ may require a deposit.</li>
                <li>Please call for same‑day large group reservations.</li>
              </ul>
            </div>
            <div className="carpet-frame p-4 bg-cream/70">
              <h3 className="font-heading text-lg">Prefer to call?</h3>
              <p className="text-sm text-brown/80">Reach us at <a href="tel:+17705550137" className="underline">(770) 555‑0137</a>.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}


