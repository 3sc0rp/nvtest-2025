import Image from 'next/image'
import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Photos from Nature Village'
}

const images = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&h=400&fit=crop&auto=format", 
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1571197119282-7c4ac8d69834?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&h=400&fit=crop&auto=format"
]

export default function GalleryPage() {
  return (
    <>
      <Section id="gallery" title="Gallery" subtitle="A warm look into our kitchen">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image 
                src={src} 
                alt={`Delicious Middle Eastern cuisine at Nature Village - ${idx + 1}`} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}


