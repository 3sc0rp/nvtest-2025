import MenuFilterBar from '@/components/MenuFilterBar'
import MenuGrid from '@/components/MenuGrid'
import Section from '@/components/Section'
import { getAllMenuItems, getPopularItems } from '@/lib/menu'
import Script from 'next/script'
import { menuJsonLd } from '@/lib/seo'
import MenuCard from '@/components/MenuCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore our halal Kurdish & Middle‑Eastern dishes'
}

export default async function MenuPage() {
  const [items, popular] = await Promise.all([getAllMenuItems(), getPopularItems(6)])
  return (
    <>
      <Section id="popular" title="Most Popular" subtitle="Guest favorites">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popular.map((i) => (
            <MenuCard key={i.id} item={i} />
          ))}
        </div>
      </Section>
      <Section id="menu" title="Our Menu" subtitle="Filter by taste or dietary preference">
        <MenuFilterBar />
        <MenuGrid initialItems={items} />
      </Section>
      <Script id="ld-menu" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(menuJsonLd(items))}
      </Script>
    </>
  )
}


