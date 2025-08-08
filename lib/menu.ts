import data from '@/data/menu.json'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'Starters' | 'Grill' | 'Mains' | 'Vegan' | 'Sides' | 'Desserts' | 'Drinks'
  tags: ('vegetarian' | 'vegan' | 'gluten-free' | 'spicy' | 'popular')[]
  popularityScore?: number
  allergens?: string[]
}

export async function getAllMenuItems(): Promise<MenuItem[]> {
  return data as unknown as MenuItem[]
}

export async function getPopularItems(count = 6): Promise<MenuItem[]> {
  const items = (data as unknown as MenuItem[])
    .filter((i) => i.popularityScore && i.popularityScore > 0.6)
    .sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0))
  return items.slice(0, count)
}

export function filterAndSortItems(
  items: MenuItem[],
  {
    query,
    filters,
    sort,
    category,
  }: { query?: string; filters?: string[]; sort?: 'popular' | 'price' | 'new'; category?: string | null },
): MenuItem[] {
  let list = items
  if (query) {
    const q = query.toLowerCase()
    list = list.filter((i) =>
      [i.name, i.description, i.category, ...(i.tags || [])].join(' ').toLowerCase().includes(q),
    )
  }
  if (category) {
    list = list.filter((i) => i.category === category)
  }
  if (filters?.length) {
    list = list.filter((i) => filters!.every((f) => (f === 'popular' ? i.popularityScore : i.tags.includes(f as MenuItem['tags'][number]))))
  }
  if (sort === 'price') list = [...list].sort((a, b) => a.price - b.price)
  else if (sort === 'popular') list = [...list].sort((a, b) => (b.popularityScore || 0) - (a.popularityScore || 0))
  // 'new' not tracked in local data; fall back to original order
  return list
}


