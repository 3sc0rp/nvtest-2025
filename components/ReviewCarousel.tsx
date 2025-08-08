import Section from './Section'

const reviews = [
  {
    source: 'Google',
    text: 'The lamb shank mazrah was incredible - tender, flavorful, and perfectly spiced. The saffron rice was fragrant and the staff made us feel like family. Highly recommend!',
    rating: 5,
    author: 'Sarah M.'
  },
  { 
    source: 'Yelp', 
    text: 'Best Middle‑Eastern food in Suwanee! The hummus is silky smooth, the kebabs are perfectly charred, and everything is 100% halal. Generous portions and fair prices.',
    rating: 5,
    author: 'Ahmed K.'
  },
  { 
    source: 'Google', 
    text: 'Beautiful atmosphere with authentic Kurdish flavors. The mixed grill for two was more than enough and every bite was delicious. The knafeh dessert was the perfect ending.',
    rating: 5,
    author: 'Jennifer L.'
  },
]

export default function ReviewCarousel() {
  return (
    <Section id="reviews" title="What guests are saying">
      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <blockquote key={i} className="bg-cream rounded-lg p-6 border shadow-sm">
            <div className="flex mb-2">
              {Array.from({ length: r.rating }).map((_, star) => (
                <span key={star} className="text-yellow-500">★</span>
              ))}
            </div>
            <p className="italic text-brown/90 mb-4">&ldquo;{r.text}&rdquo;</p>
            <cite className="block text-sm text-brown/70">
              — {r.author} on {r.source}
            </cite>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}


