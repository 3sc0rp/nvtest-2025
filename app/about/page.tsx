import Section from '@/components/Section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Our halal standards, Kurdish heritage, and sustainability.'
}

export default function AboutPage() {
  return (
    <>
      <Section id="about" title="Our Story" subtitle="A Kurdish family kitchen">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop&auto=format" 
            alt="Traditional Kurdish family cooking with heritage recipes" 
            className="rounded-lg shadow" 
          />
          <div className="prose prose-lg">
            <p>
              From the bustling markets of Erbil to the heart of Georgia, Nature Village celebrates the
              generous spirit of Kurdish cuisine. Our family recipes have been passed down through generations,
              each dish telling a story of tradition, hospitality, and love for authentic flavors.
            </p>
            <p>
              We specialize in slow‑braised lamb that falls off the bone, fragrant saffron rice perfumed with
              aromatic spices, char‑kissed kebabs grilled over live fire, and seasonal vegetables prepared 
              with time-honored techniques.
            </p>
            <p className="font-semibold">
              ✓ 100% Halal Certified &nbsp;&nbsp; ✓ Sustainably Sourced &nbsp;&nbsp; ✓ Family Recipes
            </p>
          </div>
        </div>
      </Section>
      <Section id="sustainability" title="Our Commitment" subtitle="Beyond great food">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Sustainability</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-olive rounded-full mr-3"></span>
                Responsible sourcing from regional farms
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-olive rounded-full mr-3"></span>
                Compostable packaging for all takeout orders
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-olive rounded-full mr-3"></span>
                Energy‑efficient kitchen operations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-olive rounded-full mr-3"></span>
                Zero food waste policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                Supporting local Kurdish families
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                Cultural events and celebrations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                Educational workshops on Middle Eastern cuisine
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-terracotta rounded-full mr-3"></span>
                Charity partnerships with local organizations
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}


