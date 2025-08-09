export default function CarpetFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`carpet-frame ${className}`}>{children}</div>
}


