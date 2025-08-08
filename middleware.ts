import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ku', 'ar', 'fa'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: true,
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}


