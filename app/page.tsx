import Hero from '@/components/Hero'
import FeaturedDishes from '@/components/FeaturedDishes'
import Section from '@/components/Section'
import ReviewCarousel from '@/components/ReviewCarousel'
import InstagramStrip from '@/components/InstagramStrip'
import Map from '@/components/Map'
import OrderButtons from '@/components/OrderButtons'
import { getPopularItems } from '@/lib/menu'
import site from '@/data/site.json'
import Script from 'next/script'
import { organizationJsonLd } from '@/lib/seo'

export default async function HomePage() {
  const popular = await getPopularItems(6)
  return (
    <>
      <Hero />
      <Section id="order-cta" title="Reserve or Order" subtitle="Your table is waiting">
        <div className="flex flex-wrap gap-3">
          <OrderButtons
            sliceUrl={process.env['NEXT_PUBLIC_SLICE_URL'] || '#'}
            doordashUrl={process.env['NEXT_PUBLIC_DOORDASH_URL'] || '#'}
            ubereatsUrl={process.env['NEXT_PUBLIC_UBEREATS_URL'] || '#'}
          />
        </div>
      </Section>
      <FeaturedDishes items={popular} />
      <Section id="story" title="Our Story" subtitle="100% Halal">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&auto=format" 
            alt="Halal certified kitchen with fresh ingredients" 
            className="rounded-lg shadow" 
          />
          <div className="prose prose-olive">
            <p>
              Nature Village is a Kurdish‑owned, halal Middle‑Eastern restaurant bringing the
              flavors of the Zagros mountains to Georgia. We source thoughtfully, cook over live
              fire, and welcome you like family.
            </p>
          </div>
        </div>
      </Section>
      <Section id="location" title="Find Us" subtitle={site.address}>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div className="space-y-1">
              <p className="font-semibold">Phone: {site.phone}</p>
              <p>Hours: {site.hoursSummary}</p>
            </div>
            <a
              href={site.mapsUrl}
              className="inline-block mt-4 bg-olive text-cream px-4 py-2 rounded shadow hover:opacity-90"
            >
              Directions
            </a>
          </div>
          <Map />
        </div>
      </Section>
      <Section id="events" title="Private Events & Catering">
        <div className="rounded-lg bg-sand p-6 border border-olive/20">
          Let us host your next celebration. Our team can design a custom Kurdish feast.
          <a className="ml-2 underline" href="/catering">
            Learn more
          </a>
        </div>
      </Section>
      <ReviewCarousel />
      <InstagramStrip />
      <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationJsonLd())}
      </Script>
    </>
  )
}
