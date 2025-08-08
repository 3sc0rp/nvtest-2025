import Image from 'next/image'
import Section from './Section'

const imgs = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1571197119282-7c4ac8d69834?w=300&h=300&fit=crop&auto=format", 
  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=300&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop&auto=format"
]

export default function InstagramStrip() {
  return (
    <Section id="instagram" title="From Instagram">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
        {imgs.map((src, idx) => (
          <div key={idx} className="relative aspect-square overflow-hidden rounded hover:opacity-80 transition-opacity cursor-pointer">
            <Image 
              src={src} 
              alt={`Nature Village Instagram post showing delicious food - ${idx + 1}`} 
              fill 
              className="object-cover" 
            />
          </div>
        ))}
      </div>
    </Section>
  )
}


