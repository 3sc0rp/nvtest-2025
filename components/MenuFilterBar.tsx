"use client"
import { useMenuUiStore } from '@/lib/store'
import { track } from '@/lib/analytics'
import Chip from './Chip'
import { useMemo } from 'react'
import type { MenuItem } from '@/lib/menu'
import data from '@/data/menu.json'

const chips = [
  { key: 'popular', label: 'Popular' },
  { key: 'vegetarian', label: 'Vegetarian' },
  { key: 'vegan', label: 'Vegan' },
  { key: 'gluten-free', label: 'Gluten‑Free' },
  { key: 'spicy', label: 'Spicy' },
]

export default function MenuFilterBar({ onSearch }: { onSearch?: (q: string) => void }) {
  const { query, setQuery, filters, toggleFilter, category, setCategory } = useMenuUiStore()
  const categories = useMemo(
    () => Array.from(new Set((data as unknown as MenuItem[]).map((i) => i.category))),
    [],
  )

  return (
    <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur border-y border-brown/10 py-3">
      <div className="container-grid flex flex-wrap items-center gap-2">
        <input
          className="input flex-1"
          placeholder="Search dishes..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch?.(e.target.value)
            window.dispatchEvent(new CustomEvent('menu:search', { detail: e.target.value }))
          }}
        />
        {chips.map((c) => {
          const isOn = filters.includes(c.key)
          return (
            <Chip
              key={c.key}
              active={isOn}
              onClick={() => {
                toggleFilter(c.key)
                track('filter_toggle', { key: c.key })
              }}
            >
              {c.label}
            </Chip>
          )
        })}
        <select
          className="input max-w-[200px] ml-auto"
          value={category || ''}
          onChange={(e) => setCategory(e.target.value || null)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}


