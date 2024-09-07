'use client';

import { celo, celoAlfajores, mainnet, sepolia } from '@wagmi/core/chains';
import { createConfig, http } from '@wagmi/core';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import {
  XMTPProvider,
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
} from '@xmtp/react-sdk';
import { Web3AuthConnectorInstance } from './web3Connector';

const contentTypeConfigs = [attachmentContentTypeConfig, reactionContentTypeConfig, replyContentTypeConfig];

const configX = createConfig({
  chains: [sepolia, celoAlfajores, celo],
  transports: {
    [sepolia.id]: http(),
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
  ssr: true,
  connectors: [Web3AuthConnectorInstance([sepolia, celo, celoAlfajores])],
});

const queryClient = new QueryClient();

export function Web3Providers(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={configX}>
      <QueryClientProvider client={queryClient}>
        <XMTPProvider contentTypeConfigs={contentTypeConfigs}>{props.children}</XMTPProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
