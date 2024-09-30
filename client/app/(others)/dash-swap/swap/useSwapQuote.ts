import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { getMentoSdk } from './sdk';
import { SwapDirection } from './types';
import { calcExchangeRate, invertExchangeRate, parseInputExchangeAmount } from './utils';
import { useChainId } from 'wagmi';
import { logger } from '@/utils';
import { TokenId, Tokens, TokenFn, SWAP_QUOTE_REFETCH_INTERVAL, useDebounce, fromWei } from '@/lib';
import BigNumber from 'bignumber.js';
import { BigNumberish } from 'ethers/lib.commonjs/ethers';

export function useSwapQuote(
  amount: string | number,
  direction: SwapDirection,
  fromTokenId: TokenId,
  toTokenId: TokenId
) {
  const chainId = useChainId();

  const debouncedAmount = useDebounce(amount, 350);

  const { isLoading, isError, error, data, refetch } = useQuery(
    ['useSwapQuote', debouncedAmount, fromTokenId, toTokenId, direction],
    async () => {
      const fromToken = Tokens[fromTokenId];
      const toToken = Tokens[toTokenId];
      const isSwapIn = direction === 'in';
      const amountWei = parseInputExchangeAmount(amount, isSwapIn ? fromTokenId : toTokenId);
      const amountWeiBN = BigNumber(amountWei);
      // const amountWeiBN = ethers.BigNumber.from(amountWei);

      const amountDecimals = isSwapIn ? fromToken.decimals : toToken.decimals;
      const quoteDecimals = isSwapIn ? toToken.decimals : fromToken.decimals;
      if (amountWeiBN.lte(0) || !fromToken || !toToken) return null;
      const fromTokenAddr = TokenFn.getTokenAddress(fromTokenId, chainId);
      const toTokenAddr = TokenFn.getTokenAddress(toTokenId, chainId);
      const mento = await getMentoSdk(chainId);

      let quoteWei: string;
      if (isSwapIn) {
        quoteWei = (
          await mento.getAmountOut(fromTokenAddr, toTokenAddr, amountWeiBN as unknown as BigNumberish)
        ).toString();
      } else {
        quoteWei = (
          await mento.getAmountIn(fromTokenAddr, toTokenAddr, amountWeiBN as unknown as BigNumberish)
        ).toString();
      }

      const quote = fromWei(quoteWei, quoteDecimals).toString();
      const rateIn = calcExchangeRate(amountWei, amountDecimals, quoteWei, quoteDecimals);
      const rate = isSwapIn ? rateIn : invertExchangeRate(rateIn);

      return {
        amountWei,
        quoteWei,
        quote,
        rate,
      };
    },
    {
      staleTime: SWAP_QUOTE_REFETCH_INTERVAL,
      refetchInterval: SWAP_QUOTE_REFETCH_INTERVAL,
    }
  );

  useEffect(() => {
    if (error) {
      toast.error('Unable to fetch swap out amount');
      logger.error(error);
    }
  }, [error]);

  return {
    isLoading,
    isError,
    amountWei: data?.amountWei || '0',
    quoteWei: data?.quoteWei || '0',
    quote: data?.quote || '0',
    rate: data?.rate,
    refetch,
  };
}
