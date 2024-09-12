import { useReadContract, useWriteContract } from 'wagmi';

import { App3Abi } from '.';

export type Transaction = {
  id: number;
  buyer: `0x${string}`;
  seller: `0x${string}`;
  amount: number;
  isCompleted: boolean;
  isDisputed: boolean;
  isRefunded: boolean;
};

// ! Write contract
export const useCreateEscrow = () => {
  const { writeContract, ...res } = useWriteContract();

  const createEscrow = (sellerAddress: string, amount: number) =>
    writeContract({
      functionName: 'createEscrow',
      args: [sellerAddress],
      value: BigInt(amount),
      address: App3Abi.p2pContractAddress as `0x${string}`,
      abi: App3Abi.p2pAbi,
    });

  return { createEscrow, result: res };
};

export const useReleaseFunds = () => {
  const { writeContract, ...res } = useWriteContract();

  const releaseFunds = (txId: number) => {
    writeContract({
      functionName: 'releaseFunds',
      args: [txId],
      address: App3Abi.p2pContractAddress as `0x${string}`,
      abi: App3Abi.p2pAbi,
    });
  };

  return { releaseFunds, result: res };
};

export const useRequestRefund = () => {
  const { writeContract, ...res } = useWriteContract();

  const requestRefund = (txId: number) => {
    writeContract({
      functionName: 'requestRefund',
      args: [txId],
      address: App3Abi.p2pContractAddress as `0x${string}`,
      abi: App3Abi.p2pAbi,
    });
  };

  return { requestRefund, result: res };
};

export const useAgreeRefund = () => {
  const { writeContract, ...res } = useWriteContract();

  const agreeRefund = (txId: number) => {
    writeContract({
      functionName: 'agreeRefund',
      args: [txId],
      address: App3Abi.p2pContractAddress as `0x${string}`,
      abi: App3Abi.p2pAbi,
    });
  };

  return { agreeRefund, result: res };
};

export const useDisputeTransaction = () => {
  const { writeContract, ...res } = useWriteContract();

  const disputeTransaction = (txId: number) => {
    writeContract({
      functionName: 'disputeTransaction',
      args: [txId],
      address: App3Abi.p2pContractAddress as `0x${string}`,
      abi: App3Abi.p2pAbi,
    });
  };

  return { disputeTransaction, result: res };
};

// ! Read contract
export const useGetAllTransactionsForUser = (address: string) => {
  const result = useReadContract({
    functionName: 'getAllTransactionsForUser',
    args: [address],
    address: App3Abi.p2pContractAddress as `0x${string}`,
    abi: App3Abi.p2pAbi,
  });
  return {
    result,
    data: result.data as Transaction[],
  };
};

export const useGetAllRefundedTransactions = () => {
  const result = useReadContract({
    functionName: 'getAllRefundedTransactions',
    address: App3Abi.p2pContractAddress as `0x${string}`,
    abi: App3Abi.p2pAbi,
  });
  return {
    result,
    data: result.data as Transaction[],
  };
};

export const useGetAllDisputedTransactions = () => {
  const result = useReadContract({
    functionName: 'getAllDisputedTransactions',
    address: App3Abi.p2pContractAddress as `0x${string}`,
    abi: App3Abi.p2pAbi,
  });
  return {
    result,
    data: result.data as Transaction[],
  };
};

export const useGetAllCompletedTransactions = () => {
  const result = useReadContract({
    functionName: 'getAllCompletedTransactions',
    address: App3Abi.p2pContractAddress as `0x${string}`,
    abi: App3Abi.p2pAbi,
  });
  return {
    result,
    data: result.data as Transaction[],
  };
};
