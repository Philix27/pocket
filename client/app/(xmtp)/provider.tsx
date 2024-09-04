'use client';

import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { celo, celoAlfajores, mainnet, polygon, sepolia } from '@wagmi/core/chains';
import { createConfig, http } from '@wagmi/core';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
// XmtpUtils
import {
  XMTPProvider,
  attachmentContentTypeConfig,
  reactionContentTypeConfig,
  replyContentTypeConfig,
} from '@xmtp/react-sdk';
import { WalletProvider } from '@/lib';
import Web3AuthConnectorInstance from './web3Connector';

const contentTypeConfigs = [attachmentContentTypeConfig, reactionContentTypeConfig, replyContentTypeConfig];

const configX = createConfig({
  chains: [mainnet, sepolia, celoAlfajores],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [celoAlfajores.id]: http(),
  },
  ssr: true,
  connectors: [Web3AuthConnectorInstance([mainnet, sepolia, celoAlfajores])],
});

const queryClient = new QueryClient();

export default function AppProvider(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={configX}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <WalletProvider>
            <XMTPProvider contentTypeConfigs={contentTypeConfigs}>{props.children}</XMTPProvider>
          </WalletProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
