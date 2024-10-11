import React, { useEffect, useState } from 'react';
import { useApproveTransaction } from './swap/useApproveTransaction';
import { useSwapTransaction } from './swap/useSwapTransaction';
import { logger } from '@/utils';
import { useAccount } from 'wagmi';
import { useSwap } from './useAcctBalance';

export function ConfirmSwap() {
  const { selectedToken, update, exchangeValue, balances, ...store } = useSwap();
  const { address, chainId, isConnected } = useAccount();
  const { sendApproveTx, isApproveTxSuccess, isApproveTxLoading } = useApproveTransaction(
    chainId!,
    selectedToken.fromTokens.id,
    exchangeValue.fromToken.toString(),
    address
  );

  const [isApproveConfirmed, setApproveConfirmed] = useState(false);

  const { sendSwapTx, isSwapTxLoading, isSwapTxSuccess } = useSwapTransaction(
    chainId,
    fromTokenId,
    toTokenId,
    amountWei,
    thresholdAmountWei,
    direction,
    address,
    isApproveConfirmed
  );

  const onSubmit = async () => {
    if (!rate || !amountWei || !address || !isConnected) return;

    if (!sendApproveTx || isApproveTxSuccess || isApproveTxLoading) {
      logger.debug('Approve already started or finished, ignoring submit');
      return;
    }

    setIsModalOpen(true);

    try {
      logger.info('Sending approve tx');
      const approveResult = await sendApproveTx();
      const approveReceipt = await approveResult.wait(1);
      toastToYourSuccess('Approve complete, starting swap', approveReceipt.transactionHash, chainId);
      setApproveConfirmed(true);
      logger.info(`Tx receipt received for approve: ${approveReceipt.transactionHash}`);
    } catch (error) {
      logger.error('Failed to approve token', error);
      setIsModalOpen(false);
    }
  };

  // TODO find a way to have this trigger from the onSubmit
  useEffect(() => {
    if (isSwapTxLoading || isSwapTxSuccess || !isApproveTxSuccess || !sendSwapTx) return;
    logger.info('Sending swap tx');

    sendSwapTx()
      .then((swapResult) => swapResult.wait(1))
      .then((swapReceipt) => {
        logger.info(`Tx receipt received for swap: ${swapReceipt.transactionHash}`);
        toastToYourSuccess('Swap Complete!', swapReceipt.transactionHash, chainId);
        // dispatch(setFormValues(null));
      })
      .catch((e) => {
        logger.error('Swap failure:', e);
      })
      .finally(() => setIsModalOpen(false));
  }, [isApproveTxSuccess, isSwapTxLoading, isSwapTxSuccess, sendSwapTx, chainId, dispatch]);

  //   const onClickBack = () => {
  //     dispatch(setFormValues(null));
  //   };

  const onClickRefresh = () => {
    // Note, rates automatically re-fetch regularly
    refetch().catch((e) => logger.error('Failed to refetch quote:', e));
  };

  return <div>ConfirmUi</div>;
}
