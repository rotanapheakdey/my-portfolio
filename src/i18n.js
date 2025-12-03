import { createI18n } from 'vue-i18n'
import en from './locales/en'
import km from './locales/km'

const i18n = createI18n({
  legacy: false,
  locale: 'km', // <--- CHANGED TO 'km' (Default)
  fallbackLocale: 'en',
  globalInjection: true,
  messages: { en, km }
})

export default i18n
