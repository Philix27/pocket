'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { celo, celoAlfajores } from 'wagmi/chains';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector';
import { coinbaseWallet, walletConnect, metaMask } from 'wagmi/connectors';
import Web3AuthConnectorInstance from './web3AuthConnector';

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;
const appName = 'ChatX';
const rainbowConfig = getDefaultConfig({
  appName: appName,
  projectId: projectId,
  chains: [celo, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
});

const wagConfig = createConfig({
  chains: [celo, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
  connectors: [
    walletConnect({
      projectId: projectId,
      showQrModal: true,
    }),
    coinbaseWallet({ appName: appName }),
    metaMask(),
    Web3AuthConnectorInstance([celo, celoAlfajores]),
  ],
});

const queryClient = new QueryClient();

export function AppProviders(props: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WagmiProvider config={wagConfig}>
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
