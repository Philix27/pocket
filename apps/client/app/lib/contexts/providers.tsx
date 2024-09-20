'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { Web3Providers } from './web3Provider';
import { Analytics } from '@vercel/analytics/react';

export function AppProviders(props: { children: ReactNode }) {
  return (
    <Web3Providers>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {props.children}
        <Toaster className={'bg-primary'} />
        <Analytics />
      </ThemeProvider>
    </Web3Providers>
  );
}
