'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { Web3Providers } from './web3Provider';
import { Analytics } from '@vercel/analytics/react';
import { useAppTheme } from '../hooks/useTheme';

export function AppProviders(props: { children: ReactNode }) {
  const theme = useAppTheme();
  return (
    <Web3Providers>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {props.children}
        <Toaster
          className={'bg-primary'}
          position="top-center"
          style={{
            backgroundColor: theme.isDark ? '#19232f' : '#e6e6e6',
            color: theme.isDark ? '#e3e6e6' : '#535353',
          }}
        />
        <Analytics />
      </ThemeProvider>
    </Web3Providers>
  );
}
