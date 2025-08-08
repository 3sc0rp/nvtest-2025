"use client"
import { motion } from 'framer-motion'

export default function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-3 py-1 rounded-full border ${
        active ? 'bg-olive text-cream border-olive' : 'bg-cream text-brown'
      }`}
    >
      {children}
    </motion.button>
  )
}


