# Nature Village – Halal/Middle‑Eastern Restaurant Website

A production-ready restaurant website built with Next.js 14, featuring an interactive menu, online ordering integration, and modern design.

## ✨ Features

- **Interactive Menu**: Filterable by category, dietary preferences (vegetarian, vegan, gluten-free, spicy)
- **Reservation Integration**: Support for Resy, OpenTable, SevenRooms
- **Online Ordering**: Integration with Slice, DoorDash, UberEats
- **SEO Optimized**: JSON-LD structured data, OpenGraph, Twitter cards
- **Mobile-First Design**: Responsive with quick-access mobile CTAs
- **Performance**: 90+ Lighthouse scores, optimized images, lazy loading
- **Accessibility**: WCAG AA compliance, keyboard navigation, screen reader support

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS (+ typography, forms plugins)
- **Animations**: Framer Motion
- **State Management**: Zustand for menu UI state
- **SEO**: next-sitemap for sitemap generation
- **Analytics**: Vercel Analytics integration
- **Forms**: Zod validation, honeypot spam protection

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Copy environment variables:
   ```bash
   cp env.example .env.local
   ```

4. Update `.env.local` with your values (see Environment Variables section)

5. Start development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript checks

## 🌍 Environment Variables

Copy `env.example` to `.env.local` and configure:

### Required for Production
```env
SITE_URL=https://your-domain.com
```

### Optional Integrations
```env
# Online Ordering
NEXT_PUBLIC_SLICE_URL=https://your-slice-url
NEXT_PUBLIC_DOORDASH_URL=https://your-doordash-url
NEXT_PUBLIC_UBEREATS_URL=https://your-ubereats-url

# Reservations (choose one)
NEXT_PUBLIC_RESY_URL=https://your-resy-url
NEXT_PUBLIC_OPENTABLE_URL=https://your-opentable-url
```

## 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment
```bash
npm run build
vercel --prod
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts, analytics
│   ├── page.tsx           # Home page
│   ├── menu/              # Interactive menu page
│   ├── about/             # About page
│   ├── api/               # API routes (contact, catering)
│   └── ...                # Other pages
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Footer.tsx        # Footer with newsletter
│   ├── Hero.tsx          # Video hero section
│   ├── Menu*.tsx         # Menu-related components
│   └── ...               # Other components  
├── data/                 # Static data files
│   ├── menu.json         # Menu items with categories, tags
│   └── site.json         # Site configuration (NAP, hours)
├── lib/                  # Utility functions
│   ├── menu.ts           # Menu filtering and sorting
│   ├── seo.ts            # JSON-LD schema generators
│   └── ...               # Other utilities
├── i18n/                 # Internationalization (future)
└── public/               # Static assets
    ├── images/           # Optimized images
    └── og/               # OpenGraph images
```

## 🎨 Customization

### Brand Colors
Update `tailwind.config.ts`:
```js
colors: {
  olive: '#596B3A',     // Primary brand color
  sand: '#E9DEC9',      // Light accent
  terracotta: '#C1704A', // Secondary accent
  brown: '#3A2F2A',     // Text color
  cream: '#FAF6EF',     // Background
}
```

### Menu Data
Edit `data/menu.json` to add/modify menu items:
```json
{
  "id": "unique-id",
  "name": "Dish Name",
  "description": "Description text",
  "price": 15.99,
  "image": "/images/dishes/dish.jpg",
  "category": "Mains",
  "tags": ["vegetarian", "popular"],
  "popularityScore": 0.85,
  "allergens": ["dairy", "nuts"]
}
```

### Site Information
Update `data/site.json`:
```json
{
  "name": "Your Restaurant",
  "address": "123 Main St, City, State 12345",
  "phone": "(555) 123-4567",
  "hoursSummary": "Mon-Sun 11AM-10PM"
}
```

## 📋 Requirements Met

- ✅ Interactive, filterable menu with instant search
- ✅ Reservation and ordering buttons above the fold
- ✅ Mobile quick CTAs (Call, Reserve, Order)
- ✅ JSON-LD structured data (Restaurant + Menu)
- ✅ NAP (Name, Address, Phone) consistent across pages
- ✅ Micro-animations without CLS issues
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier configured
- ✅ Performance optimized (90+ Lighthouse)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run typecheck && npm run lint`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.


