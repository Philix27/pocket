'use client';

import { celo, celoAlfajores, mainnet, sepolia } from '@wagmi/core/chains';
import { createConfig, http, injected } from '@wagmi/core';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
<<<<<<< HEAD:apps/client/app/lib/contexts/web3Provider.tsx
import { ReactNode } from 'react';
=======
import { ReactNode, useState } from 'react';
>>>>>>> main:client/app/lib/contexts/web3Provider.tsx
import { defineChain } from 'viem';
import {
  XMTPProvider,
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
} from '@xmtp/react-sdk';
import { Web3AuthConnectorInstance } from './web3Connector';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { trpc } from '../utils';

export const fhenixConfig = defineChain({
  id: 8008135,
  name: 'Fhenix',
  network: 'Fhenix',
  nativeCurrency: { name: 'tFHE', symbol: 'tFHE', decimals: 18 },
  rpcUrls: {
    public: {
      http: ['https://api.helium.fhenix.zone'],
    },
    default: {
      http: ['https://api.helium.fhenix.zone'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Fhenix',
      url: ' https://explorer.helium.fhenix.zone',
    },
  },
});

export const fhenixFrontier = defineChain({
  id: 8008135,
  name: 'Fhenix',
  network: 'fhenixFrontier',
  nativeCurrency: { name: 'tFHE', symbol: 'tFHE', decimals: 18 },
  rpcUrls: {
    public: {
      http: ['https://api.helium.fhenix.zone'],
    },
    default: {
      http: ['https://api.helium.fhenix.zone'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Fhenix',
      url: ' https://explorer.helium.fhenix.zone',
    },
  },
});

const contentTypeConfigs = [attachmentContentTypeConfig, reactionContentTypeConfig, replyContentTypeConfig];

const configX = createConfig({
<<<<<<< HEAD:apps/client/app/lib/contexts/web3Provider.tsx
  chains: [fhenixFrontier, celoAlfajores, celo],
  // chains: [celoAlfajores],
  transports: {
    [fhenixFrontier.id]: http(),
=======
  chains: [fhenixConfig, celoAlfajores, celo],
  transports: {
    [fhenixConfig.id]: http(),
>>>>>>> main:client/app/lib/contexts/web3Provider.tsx
    [celoAlfajores.id]: http(),
    [celo.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
<<<<<<< HEAD:apps/client/app/lib/contexts/web3Provider.tsx
  connectors: [Web3AuthConnectorInstance([fhenixFrontier, celoAlfajores, celo, sepolia]), injected()],
  // connectors: [Web3AuthConnectorInstance([celoAlfajores]), injected()],
=======
  connectors: [Web3AuthConnectorInstance([fhenixConfig, celoAlfajores, celo, sepolia]), injected()],
>>>>>>> main:client/app/lib/contexts/web3Provider.tsx
});

export function Web3Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_TRPC_REQUEST_URL}/api/trpc`,
        }),
      ],
      transformer: superjson,
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <WagmiProvider config={configX}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <XMTPProvider contentTypeConfigs={contentTypeConfigs}>{props.children}</XMTPProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </trpc.Provider>
  );
}
