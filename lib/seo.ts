import type { MenuItem } from './menu'
import site from '@/data/site.json'

export function restaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1365 Buford Hwy NW',
      addressLocality: 'Suwanee',
      addressRegion: 'GA',
      postalCode: '30024',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0001,
      longitude: -84.0001,
    },
    url: process.env['SITE_URL'] || 'https://nature-village.example.com',
    sameAs: Object.values(site.socials || {}),
    servesCuisine: ['Middle Eastern', 'Halal', 'Persian'],
    priceRange: '$$',
    acceptsReservations: true,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '11:00',
        closes: '23:00',
      },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '11:00', closes: '21:00' },
    ],
  }
}

export function menuJsonLd(items: MenuItem[]) {
  const sections = items.reduce<Record<string, MenuItem[]>>((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category]!.push(item)
    return acc
  }, {})
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    hasMenuSection: Object.entries(sections).map(([name, list]) => ({
      '@type': 'MenuSection',
      name,
      hasMenuItem: list.map((i) => ({
        '@type': 'MenuItem',
        name: i.name,
        description: i.description,
        offers: { '@type': 'Offer', priceCurrency: 'USD', price: i.price },
      })),
    })),
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: process.env['SITE_URL'] || 'https://nature-village.example.com',
    sameAs: Object.values(site.socials || {}),
  }
}


