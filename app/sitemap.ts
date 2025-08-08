import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env['SITE_URL'] || 'https://nature-village.example.com'
  const pages = ['', '/menu', '/about', '/reservations', '/order', '/catering', '/gallery', '/contact', '/privacy', '/tos']
  return pages.map((p) => ({ url: `${base}${p}`, changeFrequency: 'weekly', priority: p === '' ? 1 : 0.7 }))
}


