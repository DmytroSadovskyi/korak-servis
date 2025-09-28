'use client'
import { useLocale, useTranslations } from 'next-intl';
import { LocaleSwitcherSelect } from '../LocaleSwitcherSelect/LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en')
        },
        {
          value: 'hr',
          label: t('hr')
        }
      ]}
      label={t('label')}
    />
  );
}