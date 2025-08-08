import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || 'en'
  const supported = ['en', 'ku', 'ar', 'fa']
  const finalLocale = supported.includes(locale) ? locale : 'en'

  return {
    locales: supported,
    defaultLocale: 'en',
    messages: (await import(`./i18n/${finalLocale}.json`)).default,
  }
})


