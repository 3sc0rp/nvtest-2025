"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
// import { useTranslations } from 'next-intl'

export default function Hero() {
  // const t = useTranslations()
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -60])
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.15, 0.3])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.video
        style={{ y }}
        className="w-full h-[60vh] md:h-[70vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </motion.video>
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 rug-overlay" aria-hidden="true" />
      <div className="absolute inset-0 flex items-end">
        <div className="container-grid pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading max-w-2xl heading-decor"
          >
A Taste of Kurdistan in Every Bite
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 text-brown/80 max-w-xl"
          >
Halal Middle‑Eastern cuisine, wood‑fired grills, and warm hospitality in Suwanee.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link href="/reservations" className="bg-olive text-cream px-5 py-2 rounded shadow">
Reserve a Table
            </Link>
            <Link
              href="/order"
              className="bg-cream/90 border border-olive text-olive px-5 py-2 rounded"
            >
Order Online
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


