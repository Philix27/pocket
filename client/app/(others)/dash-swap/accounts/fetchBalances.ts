import { BigNumberish, Contract } from 'ethers';
import { getProvider } from '../providers';
// import type { AppDispatch, AppState } from '@/features/store/store';
import { AddressFn, isStale, TokenId, getTokenAddress, getTokenOptionsByChainId, BALANCE_STALE_TIME } from '@/lib';

interface FetchBalancesParams {
  address: string;
  chainId: number;
}

export type AccountBalances = Record<TokenId, string>;

export const fetchBalances = createAsyncThunk<AccountBalances | null, FetchBalancesParams>(
  'accounts/fetchBalances',
  async (params, thunkAPI) => {
    const { address, chainId } = params;
    const lastUpdated = thunkAPI.getState().account.lastUpdated;
    if (isStale(lastUpdated, BALANCE_STALE_TIME)) {
      const balances = await _fetchBalances(address, chainId);
      return balances;
    } else {
      return null;
    }
  }
);

async function _fetchBalances(address: string, chainId: number) {
  AddressFn.validateAddress(address, 'fetchBalances');
  const tokenBalances: Partial<Record<TokenId, string>> = {};
  for (const tokenId of getTokenOptionsByChainId(chainId)) {
    const tokenAddr = getTokenAddress(tokenId, chainId);
    const provider = getProvider(chainId);
    const tokenContract = new Contract(tokenAddr, erc20ABI, provider);
    const balance: BigNumberish = await tokenContract.balanceOf(address);
    tokenBalances[tokenId] = balance.toString();
  }
  return tokenBalances as Record<TokenId, string>;
}
