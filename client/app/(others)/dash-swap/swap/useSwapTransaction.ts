import { TokenId, TokenFn } from '@/lib';
import { useQuery } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { getMentoSdk } from './sdk';
import { SwapDirection } from './types';
import { useEstimateGas, useSendTransaction } from 'wagmi';
import { logger } from '@/utils';

export function useSwapTransaction(
  chainId: number,
  fromToken: TokenId,
  toToken: TokenId,
  amountInWei: string,
  thresholdAmountInWei: string,
  direction: SwapDirection,
  accountAddress?: Address,
  isApproveConfirmed?: boolean
) {
  const { error: txPrepError, data: txRequest } = useQuery(
    [
      'useSwapTransaction',
      chainId,
      fromToken,
      toToken,
      amountInWei,
      thresholdAmountInWei,
      direction,
      accountAddress,
      isApproveConfirmed,
    ],
    async () => {
      if (
        !accountAddress ||
        !isApproveConfirmed ||
        new BigNumber(amountInWei).lte(0) ||
        new BigNumber(thresholdAmountInWei).lte(0)
      )
        return null;
      const sdk = await getMentoSdk(chainId);
      const fromTokenAddr = TokenFn.getTokenAddress(fromToken, chainId);
      const toTokenAddr = TokenFn.getTokenAddress(toToken, chainId);
      const brokerAddr = sdk.getBroker().getAddress();
      const swapFn = direction === 'in' ? sdk.swapIn.bind(sdk) : sdk.swapOut.bind(sdk);
      const txRequest = await swapFn(fromTokenAddr, toTokenAddr, amountInWei, thresholdAmountInWei);
      return { ...txRequest, to: brokerAddr };
    }
  );

  // const { config, error: sendPrepError } = usePrepareSendTransaction(
  //   isApproveConfirmed && txRequest ? { request: txRequest } : undefined
  // );
  // const { data: txResult, isLoading, isSuccess, error: txSendError, sendTransactionAsync } = useSendTransaction(config);

  const { data, error: sendPrepError } = useEstimateGas(txRequest ? txRequest : undefined);
  const { data: txResult, isLoading, isSuccess, error: txSendError, sendTransactionAsync } = useSendTransaction();
  
  useEffect(() => {
    if (txPrepError || (sendPrepError?.message && !isLoading && !isSuccess)) {
      toast.error('Unable to prepare swap transaction');
      logger.error(txPrepError || sendPrepError?.message);
    } else if (txSendError) {
      toast.error('Unable to execute swap transaction');
      logger.error(txSendError);
    }
  }, [txPrepError, sendPrepError, isLoading, isSuccess, txSendError]);

  return {
    sendSwapTx: sendTransactionAsync,
    swapTxResult: txResult,
    isSwapTxLoading: isLoading,
    isSwapTxSuccess: isSuccess,
  };
}
