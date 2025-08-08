import Section from '@/components/Section'
import ReservationEmbed from '@/components/ReservationEmbed'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'Book your table at Nature Village'
}

export default function ReservationsPage() {
  return (
    <>
      <Section id="reservations" title="Reservations" subtitle="Book your table">
        <div className="space-y-6">
          <ReservationEmbed provider="opentable" />
          <div className="rounded-md border p-4 bg-cream">
            <p className="text-sm">If the embed does not load, please call us to reserve.</p>
          </div>
        </div>
      </Section>
    </>
  )
}


