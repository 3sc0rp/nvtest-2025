import { create } from 'zustand'

type SortKey = 'popular' | 'price' | 'new'

type MenuUiState = {
  query: string
  filters: string[]
  sort: SortKey
  category: string | null
  setQuery: (q: string) => void
  toggleFilter: (f: string) => void
  setSort: (s: SortKey) => void
  setCategory: (c: string | null) => void
}

export const useMenuUiStore = create<MenuUiState>((set) => ({
  query: '',
  filters: [],
  sort: 'popular',
  category: null,
  setQuery: (q) => set({ query: q }),
  toggleFilter: (f) =>
    set((s) => ({ filters: s.filters.includes(f) ? s.filters.filter((x) => x !== f) : [...s.filters, f] })),
  setSort: (s) => set({ sort: s }),
  setCategory: (c) => set({ category: c }),
}))


