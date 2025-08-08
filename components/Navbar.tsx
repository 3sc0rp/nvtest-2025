"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import OrderButtons from './OrderButtons'
import { useTranslations } from 'next-intl'

export default function Navbar() {
  const t = useTranslations()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-cream/95 backdrop-blur border-b border-brown/10' : 'nav-transparent'
      }`}
    >
      <div className="container-grid h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-heading text-xl">Nature Village</Link>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/menu">{t('nav.menu')}</Link>
            <Link href="/about">{t('nav.about')}</Link>
            <Link href="/reservations">{t('nav.reservations')}</Link>
            <Link href="/catering">{t('nav.catering')}</Link>
            <Link href="/gallery">{t('nav.gallery')}</Link>
            <Link href="/contact">{t('nav.contact')}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <OrderButtons compact sliceUrl="#" doordashUrl="#" ubereatsUrl="#" />
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}


