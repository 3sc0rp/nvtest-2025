export default function KurdishPatternBackground({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-rug-pattern" />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}


