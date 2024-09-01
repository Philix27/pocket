"use client";

import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "@wagmi/core/chains";
import { http } from "@wagmi/core";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const config = getDefaultConfig({
  appName: "XMTP Next.js Example",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  ssr: true,
});

const queryClient = new QueryClient();

export default function XAppProvider(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{props.children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
