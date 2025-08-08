"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { MenuItem } from '@/lib/menu'
import { useState } from 'react'
import DishModal from './DishModal'

export default function MenuCard({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="rounded-lg bg-cream border p-3 shadow-sm">
      <div className="flex gap-3">
        <button onClick={() => setOpen(true)} className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded focus:outline-none">
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        </button>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold">{item.name}</h3>
            <span className="font-medium">${item.price.toFixed(2)}</span>
          </div>
          <p className="text-sm text-brown/70 line-clamp-2">{item.description}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {item.tags.map((t) => (
              <span key={t} className="text-xs bg-sand px-2 py-0.5 rounded-full border">
                {t}
              </span>
            ))}
          </div>
          <a href={`/order`} className="text-sm underline inline-block mt-2">
            Order
          </a>
        </div>
      </div>
      {open ? <DishModal item={item} onClose={() => setOpen(false)} /> : null}
    </motion.div>
  )
}


