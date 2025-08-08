import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  // Since we're using localePrefix: 'never', the locale comes from headers/cookies
  const locale = (await requestLocale) || 'en'
  const supported = ['en', 'ku', 'ar', 'fa']
  const finalLocale = supported.includes(locale) ? locale : 'en'

  return {
    locale: finalLocale,
    messages: (await import(`./i18n/${finalLocale}.json`)).default,
  }
})


