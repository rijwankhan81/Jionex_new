// utils/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import config from '../next-i18next.config';

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    ...config.i18n,
    fallbackLng: config.fallbackLng,
    react: config.react,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;