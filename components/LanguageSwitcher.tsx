"use client"
// import { useLocale } from 'next-intl'
import { useState, useTransition } from 'react'

const locales = [
  { code: 'en', label: 'English' },
  { code: 'ku', label: 'Kurdî' },
  { code: 'ar', label: 'العربية' },
  { code: 'fa', label: 'فارسی' },
]

export default function LanguageSwitcher() {
  const locale = 'en' // useLocale()
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`
      window.location.reload()
    })
  }

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="px-3 py-1 border rounded bg-cream min-w-[96px]">
        {locales.find((l) => l.code === locale)?.label || 'Language'}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow text-sm">
          {locales.map((l) => (
            <button
              key={l.code}
              className="block px-3 py-2 w-full text-left hover:bg-cream"
              onClick={() => {
                setOpen(false)
                if (l.code !== locale) switchLocale(l.code)
              }}
              disabled={isPending}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}


