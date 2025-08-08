"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function GalleryClient({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, images.length])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, idx) => (
          <button
            key={idx}
            className="relative aspect-[4/3] overflow-hidden rounded-md focus:outline-none"
            onClick={() => {
              setIndex(idx)
              setOpen(true)
            }}
            aria-label={`Open image ${idx + 1}`}
          >
            <Image
              src={src}
              alt={`Delicious Middle Eastern cuisine at Nature Village - ${idx + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative max-w-5xl w-full h-[70vh] bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={images[index] as string} alt="" fill className="object-contain" />
            <button
              className="absolute top-3 right-3 bg-cream text-brown px-3 py-1 rounded"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              Close
            </button>
            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-cream/90 text-brown px-2 py-1 rounded"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-cream/90 text-brown px-2 py-1 rounded"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              aria-label="Next image"
            >
              ›
            </button>
          </motion.div>
        </div>
      ) : null}
    </>
  )
}


