import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileQuickCtas from '@/components/MobileQuickCtas'
import { restaurantJsonLd } from '@/lib/seo'
import Script from 'next/script'
// import { NextIntlClientProvider } from 'next-intl'
// import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const fraunces = Fraunces({ subsets: ['latin'], display: 'swap', variable: '--font-fraunces' })

export const metadata: Metadata = {
  title: {
    default: 'Nature Village | Halal Middle-Eastern Restaurant',
    template: '%s | Nature Village',
  },
  description:
    'A taste of Kurdistan in every bite. Halal Middle‑Eastern cuisine, grill specialties, and warm hospitality in Suwanee, GA.',
  metadataBase: new URL('https://nature-village.example.com'),
  openGraph: {
    type: 'website',
    title: 'Nature Village',
    description: 'A taste of Kurdistan in every bite. Halal Middle‑Eastern cuisine in Suwanee, GA.',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630, alt: 'Nature Village' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  themeColor: '#596B3A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileQuickCtas />
        <Analytics />
        <Script id="ld-restaurant" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(restaurantJsonLd())}
        </Script>
      </body>
    </html>
  )
}
