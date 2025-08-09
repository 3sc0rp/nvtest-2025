type PatternVariant = 'rug' | 'geom'
type Intensity = 'subtle' | 'soft' | 'bold'

export default function KurdishPatternBackground({
  children,
  variant = 'rug',
  intensity = 'subtle',
}: {
  children: React.ReactNode
  variant?: PatternVariant
  intensity?: Intensity
}) {
  const opacityClass = intensity === 'bold' ? 'opacity-20' : intensity === 'soft' ? 'opacity-10' : 'opacity-5'
  const bgClass = variant === 'rug' ? 'bg-rug-pattern' : 'bg-geom-pattern'

  return (
    <div className="relative">
      <div className={`absolute inset-0 ${opacityClass} pointer-events-none`} aria-hidden="true">
        <div className={`w-full h-full ${bgClass} bg-repeat` as const} style={{ backgroundSize: variant === 'rug' ? '520px' : '280px' }} />
      </div>
      <div className="relative">{children}</div>
    </div>
  )
}


