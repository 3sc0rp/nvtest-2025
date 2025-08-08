import Section from '@/components/Section'
import OrderButtons from '@/components/OrderButtons'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Order',
  description: 'Order pickup or delivery from Nature Village'
}

export default function OrderPage() {
  return (
    <>
      <Section id="order" title="Order Online" subtitle="Pickup or delivery">
        <p className="mb-4 text-sm text-brown/80">
          Choose your preferred platform. Pickup orders help local restaurants the most—thank you!
        </p>
        <OrderButtons
          sliceUrl={process.env['NEXT_PUBLIC_SLICE_URL'] || '#'}
          doordashUrl={process.env['NEXT_PUBLIC_DOORDASH_URL'] || '#'}
          ubereatsUrl={process.env['NEXT_PUBLIC_UBEREATS_URL'] || '#'}
        />
      </Section>
    </>
  )
}


