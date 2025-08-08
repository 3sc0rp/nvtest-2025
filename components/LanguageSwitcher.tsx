"use client"

export default function LanguageSwitcher() {
  const toggle = () => {
    // For now, just a placeholder
    console.log('Language switch clicked')
  }
  return (
    <button onClick={toggle} className="text-sm underline" aria-label="Switch language">
      EN/کوردی
    </button>
  )
}


