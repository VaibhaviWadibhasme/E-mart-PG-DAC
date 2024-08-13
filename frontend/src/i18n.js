import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../src/locales/en/translation.json';
import translationMR from '../src/locales/hn/translation.json';
const resources = {
  en: {
    translation: translationEN
  },
  hn: { // Ensure 'mr' is used consistently
    translation: translationMR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
