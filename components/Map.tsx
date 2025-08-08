import site from '@/data/site.json'

export default function Map() {
  const src = site.mapEmbedUrl
  return (
    <div className="w-full h-72 rounded-lg overflow-hidden border" role="img" aria-label={`Map to ${site.address}`}>
      <iframe
        title="Google Map"
        src={src}
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}


