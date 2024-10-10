import { JsonRpcProvider } from 'ethers';
import { ChainId, chainIdToChain } from '@/lib';

const cache: Record<number, JsonRpcProvider> = {};

// TODO remove and replace with useProvider from wagmi
export function getProvider(chainId: ChainId): JsonRpcProvider {
  if (cache[chainId]) return cache[chainId];
  const chain = chainIdToChain[chainId];
  const provider = new JsonRpcProvider(chain.rpcUrl, chainId);
  cache[chainId] = provider;
  return provider;
}
