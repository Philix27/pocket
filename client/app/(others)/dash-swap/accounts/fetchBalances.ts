import { BigNumberish, BrowserProvider, Contract } from 'ethers';
import { getProvider } from '../providers';
import { AddressFn, isStale, TokenId, BALANCE_STALE_TIME, TokenFn } from '@/lib';
import { App3Abi } from '@/contract/abi';

interface FetchBalancesParams {
  address: string;
  chainId: number;
}

export type AccountBalances = Record<TokenId, string>;

export async function fetchBalances(address: string, chainId: number) {
  AddressFn.validateAddress(address, 'fetchBalances');

  const tokenBalances: Partial<Record<TokenId, string>> = {};

  for (const tokenId of TokenFn.getTokenOptionsByChainId(chainId)) {
    const tokenAddr = TokenFn.getTokenAddress(tokenId, chainId);
    // const provider = getProvider(chainId);

    const providerX = new BrowserProvider(window.ethereum);

    const tokenContract = new Contract(tokenAddr, App3Abi.erc20ABI, providerX);

    const balance: BigNumberish = await tokenContract.balanceOf(address);
    
    tokenBalances[tokenId] = balance.toString();
  }

  return tokenBalances as Record<TokenId, string>;
}
