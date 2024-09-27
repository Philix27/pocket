'use client';

import { useTheme } from 'next-themes';

export const useAppTheme = () => {
  const t = useTheme();

  return {
    isDark: t.theme === 'dark',
    t,
  };
};
