"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop&auto=format')`
        }}
      />
      {/* Video alternative - uncomment when you have a video file */}
      {/* <video
        className="w-full h-[60vh] md:h-[70vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=600&fit=crop&auto=format"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/30 to-transparent" />
      <div className="absolute inset-0 rug-overlay" />
      <div className="absolute inset-0 flex items-end">
        <div className="container-grid pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading max-w-2xl"
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
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/reservations" className="bg-olive text-cream px-5 py-2 rounded shadow">
              Reserve a Table
            </Link>
            <Link
              href="/order"
              className="bg-cream/90 border border-olive text-olive px-5 py-2 rounded"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


