"use client"

import { ReactNode } from "react"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "sonner"
import { defineChain } from "viem"
import { WagmiProvider, http } from "wagmi"
import { celo, celoAlfajores } from "wagmi/chains"
import { injected } from "wagmi/connectors"

// import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base"

// const chainConfig = {
//   chainNamespace: CHAIN_NAMESPACES.EIP155,
//   chainId: "0x7a31c7",
//   rpcTarget: "https://api.helium.fhenix.zone",
//   displayName: "Fhenix Helium",
//   blockExplorerUrl: "https://explorer.helium.fhenix.zone",
//   ticker: "tFHE",
//   tickerName: "tFHE",
//   logo: "https://img.cryptorank.io/coins/fhenix1695737384486.png",
// }

export const fhenixFrontier = defineChain({
  id: 8008135,
  name: "Fhenix Frontier",
  network: "fhenixFrontier",
  nativeCurrency: { name: "tFHE", symbol: "tFHE", decimals: 18 },
  rpcUrls: {
    public: {
      http: ["https://api.helium.fhenix.zone"],
    },
    default: {
      http: ["https://api.helium.fhenix.zone"],
    },
  },
  blockExplorers: {
    default: {
      name: "Fhenix",
      url: " https://explorer.helium.fhenix.zone",
    },
  },
})

const queryClient = new QueryClient()
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string
const rainbowConfig = getDefaultConfig({
  appName: "Pocket",
  projectId: projectId,
  chains: [fhenixFrontier, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [fhenixFrontier.id]: http(),
    // [celo.id]: http(),
    // [celoAlfajores.id]: http(),
  },
})

export default function Provider(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={rainbowConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {props.children}
          <Toaster />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
