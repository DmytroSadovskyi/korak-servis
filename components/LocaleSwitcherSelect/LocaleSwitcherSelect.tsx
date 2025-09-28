'use client';

import {useTransition} from 'react';
import {Locale} from '@/i18n/config';
import {setUserLocale} from '@/services/locale';

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export const LocaleSwitcherSelect = ({ defaultValue, items, label }: Props) => {
  const [isPending, startTransition] = useTransition();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const locale = e.target.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <label htmlFor="locale-switcher" style={{ display: 'none' }}>
        {label}
      </label>
      <select
        id="locale-switcher"
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isPending}
        style={{
          padding: '6px 12px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          backgroundColor: isPending ? '#f5f5f5' : 'white',
          color: '#333',
          cursor: isPending ? 'not-allowed' : 'pointer',
          fontSize: '14px',
          appearance: 'none',
          outline: 'none',
        }}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {/* Маленька стрілочка справа */}
      <span
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          fontSize: '12px',
          color: '#666',
        }}
      >
        ▼
      </span>
    </div>
  );
};
