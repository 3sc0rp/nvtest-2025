import { createElement } from 'react'

export default function Heading({ level = 2, children }: { level?: 1 | 2 | 3; children: React.ReactNode }) {
  const tag = `h${level}`
  const cls = level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'
  return createElement(tag, { className: `${cls} font-heading` }, children)
}


