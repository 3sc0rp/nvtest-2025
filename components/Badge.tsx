export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sand border border-olive/30 px-2 py-0.5 text-xs font-medium text-brown">
      {children}
    </span>
  )
}


