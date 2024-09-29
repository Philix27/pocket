'use client';

import { useTheme } from 'next-themes';

export const useAppTheme = () => {
  const t = useTheme();
  const isDark = t.theme === 'dark';

  return {
    isDark: t.theme === 'dark',
    t,
    primaryColor: '#f24500',
    secondaryColor: isDark ? '#232525' : '#ffffff',
    bgColor: isDark ? '#151718' : '#e6e6e6',
    accentColor: isDark ? '#222525' : '#ffffff',
    cardColor: isDark ? '#232525' : '#fff',
  };
};
