import Section from './Section'
import MenuCard from './MenuCard'
import type { MenuItem } from '@/lib/menu'

export default function FeaturedDishes({ items }: { items: MenuItem[] }) {
  if (!items?.length) return null
  return (
    <Section id="featured" title="Featured Dishes" subtitle="Guest favorites" patterned>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/menu" className="underline">
          See full menu
        </a>
      </div>
    </Section>
  )
}


