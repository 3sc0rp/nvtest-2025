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
        ruby: '#8B1E3F',
        deepBlue: '#1F3A5F',
        indigo: '#2B3A67',
        gold: '#C7A46C',
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
        'geom-pattern':
          "radial-gradient(circle at 10% 10%, rgba(139,30,63,0.06) 2px, transparent 2px), radial-gradient(circle at 60% 40%, rgba(31,58,95,0.05) 1.5px, transparent 1.5px), repeating-linear-gradient(45deg, rgba(199,164,108,0.04) 0, rgba(199,164,108,0.04) 6px, transparent 6px, transparent 12px)",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}

export default config


