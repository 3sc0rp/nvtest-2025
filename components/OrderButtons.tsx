"use client"
import { motion } from 'framer-motion'

export default function OrderButtons({
  sliceUrl,
  doordashUrl,
  ubereatsUrl,
  compact,
}: {
  sliceUrl: string
  doordashUrl: string
  ubereatsUrl: string
  compact?: boolean
}) {
  const btnClass = `px-4 py-2 rounded ${compact ? 'text-xs' : ''}`
  return (
    <div className="flex flex-wrap gap-2">
      <motion.a whileTap={{ scale: 0.98 }} href={sliceUrl} className={`bg-olive text-cream ${btnClass}`}>
        Slice
      </motion.a>
      <motion.a whileTap={{ scale: 0.98 }} href={doordashUrl} className={`bg-terracotta text-cream ${btnClass}`}>
        DoorDash
      </motion.a>
      <motion.a whileTap={{ scale: 0.98 }} href={ubereatsUrl} className={`bg-sand text-brown border ${btnClass}`}>
        UberEats
      </motion.a>
    </div>
  )
}


