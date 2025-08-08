import site from '@/data/site.json'

type Provider = 'resy' | 'opentable' | 'sevenrooms'

export default function ReservationEmbed({ provider }: { provider: Provider }) {
  const url =
    provider === 'resy'
      ? process.env['NEXT_PUBLIC_RESY_URL'] || site.reservations.resy
      : provider === 'opentable'
      ? process.env['NEXT_PUBLIC_OPENTABLE_URL'] || site.reservations.opentable
      : site.reservations.sevenrooms

  if (!url) {
    return <p className="text-sm text-brown/70">Reservations currently unavailable.</p>
  }

  return (
    <div className="w-full overflow-hidden rounded-md border" aria-label="Reservation widget">
      <iframe src={url} className="w-full h-[600px]" title="Reservations" loading="lazy" />
    </div>
  )
}


