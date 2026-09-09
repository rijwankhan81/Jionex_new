export const locales = ['en', 'bn', 'ar', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; nativeLabel: string; dir: 'ltr' | 'rtl' }> = {
  en: { label: 'English', nativeLabel: 'English', dir: 'ltr' },
  bn: { label: 'Bengali', nativeLabel: 'বাংলা', dir: 'ltr' },
  ar: { label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
  es: { label: 'Spanish', nativeLabel: 'Español', dir: 'ltr' },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
