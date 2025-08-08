"use client"
import { motion } from 'framer-motion'
import KurdishPatternBackground from './KurdishPatternBackground'

export default function Section({
  id,
  title,
  subtitle,
  children,
  patterned = false,
}: {
  id?: string
  title?: string
  subtitle?: string
  children: React.ReactNode
  patterned?: boolean
}) {
  const content = (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container-grid">
        {(title || subtitle) && (
          <div className="mb-8">
            {title && <h2 className="text-2xl md:text-3xl font-heading">{title}</h2>}
            {subtitle && <p className="text-brown/70 mt-1">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </motion.section>
  )

  if (patterned) {
    return <KurdishPatternBackground>{content}</KurdishPatternBackground>
  }
  return content
}


