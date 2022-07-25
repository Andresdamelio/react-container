import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, es } from './locales';

const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'es',
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
