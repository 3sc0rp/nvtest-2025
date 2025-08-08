"use client"
import { useEffect } from 'react'
import type { MenuItem } from '@/lib/menu'

export default function DishModal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-cream rounded-lg max-w-lg w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-heading">{item.name}</h3>
            <p className="text-brown/70">{item.description}</p>
          </div>
          <button className="underline" onClick={onClose} aria-label="Close">
            Close
          </button>
        </div>
        {item.allergens?.length ? (
          <p className="mt-3 text-sm">Allergens: {item.allergens.join(', ')}</p>
        ) : null}
      </div>
    </div>
  )
}


