"use client"
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string
  children?: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ variant = 'primary', className = '', href, children, ...props }: Props) {
  const base =
    variant === 'primary'
      ? 'bg-olive text-cream hover:opacity-95'
      : 'bg-cream border border-olive text-olive hover:bg-sand'
  
  if (href) {
    return (
      <motion.a 
        href={href}
        whileTap={{ scale: 0.98 }} 
        className={`inline-block px-4 py-2 rounded ${base} ${className}`}
      >
        {children}
      </motion.a>
    )
  }
  
  return (
    <motion.button 
      whileTap={{ scale: 0.98 }} 
      className={`px-4 py-2 rounded ${base} ${className}`}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {children}
    </motion.button>
  )
}


