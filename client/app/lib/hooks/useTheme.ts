'use client';

import { useTheme } from 'next-themes';

export const useAppTheme = () => {
  const t = useTheme();
  const isDark = t.theme === 'dark';

  return {
    t,
    isDark: t.theme === 'dark',
    primaryColor: '#f24500',
    color: isDark ? '#e3e6e6' : '#535353',
    secondaryColor: isDark ? '#232525' : '#ffffff',
    bgColor: isDark ? '#151718' : '#e6e6e6',
    accentColor: isDark ? '#222525' : '#ffffff',
    cardColor: isDark ? '#232525' : '#fff',
  };
};
