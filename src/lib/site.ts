import { defaultLocale, isLocale, type Locale } from '@/i18n/config';

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}
