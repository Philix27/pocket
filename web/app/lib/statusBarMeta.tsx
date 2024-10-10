'use client';
import { useTheme } from 'next-themes';
import React from 'react';

export default function StatusBarMeta() {
  const { setTheme, theme } = useTheme();
  return <meta name="theme-color" content={theme === 'dark' ? '#19232f' : '#e6e6e6'} />;
}
