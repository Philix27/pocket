import { useQuery } from '@tanstack/react-query';
import BigNumber from 'bignumber.js';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { getMentoSdk } from './sdk';
import { usePrepareSendTransaction, useSendTransaction } from 'wagmi';
import { TokenId, getTokenAddress } from '@/lib';
import { logger } from '@/utils';

export function useApproveTransaction(
  chainId: number,
  tokenId: TokenId,
  amountInWei: string,
  accountAddress?: Address
) {
  const { error: txPrepError, data: txRequest } = useQuery(
    ['useApproveTransaction', chainId, tokenId, amountInWei, accountAddress],
    async () => {
      if (!accountAddress || new BigNumber(amountInWei).lte(0)) return null;
      const sdk = await getMentoSdk(chainId);
      const tokenAddr = getTokenAddress(tokenId, chainId);
      const txRequest = await sdk.increaseTradingAllowance(tokenAddr, amountInWei);
      return { ...txRequest, to: tokenAddr };
    },
    {
      retry: false,
    }
  );

  const { config, error: sendPrepError } = usePrepareSendTransaction(txRequest ? { request: txRequest } : undefined);
  const { data: txResult, isLoading, isSuccess, error: txSendError, sendTransactionAsync } = useSendTransaction(config);

  useEffect(() => {
    if (txPrepError || sendPrepError?.message) {
      toast.error('Unable to prepare approval transaction');
      logger.error(txPrepError || sendPrepError?.message);
    } else if (txSendError) {
      toast.error('Unable to execute approval transaction');
      logger.error(txSendError);
    }
  }, [txPrepError, sendPrepError, txSendError]);

  return {
    sendApproveTx: sendTransactionAsync,
    approveTxResult: txResult,
    isApproveTxLoading: isLoading,
    isApproveTxSuccess: isSuccess,
  };
}
