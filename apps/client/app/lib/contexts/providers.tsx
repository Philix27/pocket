'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { Web3Providers } from './web3Provider';

export function AppProviders(props: { children: ReactNode }) {
  return (
    <Web3Providers>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {props.children}
        <Toaster className={'bg-primary'} />
      </ThemeProvider>
    </Web3Providers>
  );
}
