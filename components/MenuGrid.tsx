"use client"
import { useMemo } from 'react'
import type { MenuItem } from '@/lib/menu'
import MenuCard from './MenuCard'
import { filterAndSortItems } from '@/lib/menu'
import { useMenuUiStore } from '@/lib/store'

export default function MenuGrid({ initialItems }: { initialItems: MenuItem[] }) {
  const { query, filters, sort, setSort, category } = useMenuUiStore()

  const items = useMemo(() => filterAndSortItems(initialItems, { query, filters, sort, category }), [
    initialItems,
    query,
    filters,
    sort,
    category,
  ])

  return (
    <div>
      <div className="flex items-center justify-end gap-2 mb-4">
        <label className="text-sm">Sort</label>
        <select
          className="input max-w-[180px]"
          value={sort}
          onChange={(e) => setSort(e.target.value as 'popular' | 'price' | 'new')}
        >
          <option value="popular">Popular</option>
          <option value="price">Price</option>
          <option value="new">New</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}


