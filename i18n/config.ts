export type Locale = (typeof locales)[number];

export const locales = ['en', 'hr'] as const;
export const defaultLocale: Locale = 'hr';
