import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#596B3A',
        sand: '#E9DEC9',
        terracotta: '#C1704A',
        brown: '#3A2F2A',
        cream: '#FAF6EF',
      },
      fontFamily: {
        heading: ['var(--font-fraunces)'],
        body: ['var(--font-inter)'],
      },
      boxShadow: {
        lift: '0 10px 20px -10px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'rug-pattern': "url('/images/patterns/rug.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

export default config


