'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { celo, celoAlfajores } from 'wagmi/chains';
import { WagmiProvider, http } from 'wagmi';

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

const rainbowConfig = getDefaultConfig({
  appName: 'ChatX',
  projectId: projectId,
  chains: [celo, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
});

const queryClient = new QueryClient();

export function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WagmiProvider config={rainbowConfig}>
        <QueryClientProvider client={queryClient}>
          {/* <RainbowKitProvider> */}
          {props.children}
          <Toaster className={'bg-primary'} />
          {/* </RainbowKitProvider> */}
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
