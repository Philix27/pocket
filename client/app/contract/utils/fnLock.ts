import { BrowserProvider, Contract, ethers } from 'ethers';
import { TokenAddress } from '../const';
import { App3Abi } from '../abi';
import { useReadContract, useWriteContract } from 'wagmi';

export const useDeposit = () => {
  const depositFunds = async (props: {
    purpose: string;
    timeInSeconds: number;
    amount: number;
    _signerAddress: `0x${string}` | undefined;
  }) => {
    const tokenAmount = ethers.parseUnits(props.amount.toString(), 18);
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // approve txn
        const tokenContract = new ethers.Contract(TokenAddress.CUSD_TESTNET, TokenAddress.erc20Abi, signer);

        const tx = await tokenContract.approve!(App3Abi.lockedSavingsAddress, tokenAmount);
        console.log('Transaction approved!:', tx);

        await tx.wait();

        const contract = new Contract(App3Abi.lockedSavingsAddress, App3Abi.lockedSavingsAbi, signer);

        const txn = await contract.deposit!(props.timeInSeconds, tokenAmount, props.purpose);
        await txn.wait();
      } catch (error) {
        console.error('Error fetching cUSD balance:', error);
      }
    }
  };

  return {
    depositFunds,
  };
};

export const useWagmiDeposit = () => {
  const { writeContract } = useWriteContract();

  const deposit = async (props: {
    purpose: string;
    timeInSeconds: number;
    amount: number;
    _signerAddress: `0x${string}` | undefined;
  }) => {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const tokenAmount = ethers.parseUnits(props.amount.toString(), 18);
    // approve txn
    const tokenContract = new ethers.Contract(TokenAddress.CUSD_TESTNET, TokenAddress.erc20Abi, signer);

    const tx = await tokenContract.approve!(App3Abi.lockedSavingsAddress, tokenAmount);
    console.log('Transaction approved!:', tx);

    await tx.wait();

    writeContract({
      functionName: 'deposit',
      args: [props.timeInSeconds, props.amount, props.purpose],
      address: App3Abi.lockedSavingsAddress as `0x${string}`,
      abi: App3Abi.lockedSavingsAbi,
    });
  };

  return { deposit };
};

export const useWithdraw = () => {
  const { writeContract, ...res } = useWriteContract();

  const withdraw = (depositId: number) => {
    writeContract({
      functionName: 'withdraw',
      args: [depositId],
      address: App3Abi.lockedSavingsAddress as `0x${string}`,
      abi: App3Abi.lockedSavingsAbi,
    });
  };

  return { withdraw, result: res };
};

export const useGetRemainingLockTime = (address: string, depositId: number) => {
  const result = useReadContract({
    functionName: 'getRemainingLockTime',
    args: [address, depositId],
    address: App3Abi.lockedSavingsAddress as `0x${string}`,
    abi: App3Abi.lockedSavingsAbi,
  });

  return {
    result,
    data: result.data as number,
  };
};

export const useGetDepositDetails = (address: string, depositId: number) => {
  const result = useReadContract({
    functionName: 'getDepositDetails',
    args: [address, depositId],
    address: App3Abi.lockedSavingsAddress as `0x${string}`,
    abi: App3Abi.lockedSavingsAbi,
  });
  return {
    result,
    data: result.data as {
      amount: number;
      lockEndTime: string;
      purpose: string;
    },
  };
};

export const useDepositCount = (address: string) => {
  const result = useReadContract({
    functionName: 'userAddress',
    args: [address],
    address: App3Abi.lockedSavingsAddress as `0x${string}`,
    abi: App3Abi.lockedSavingsAbi,
  });
  return {
    result,
    data: result.data as number,
  };
};

export const useGetAllDeposit = (address: string) => {
  const result = useReadContract({
    functionName: 'getAllDeposits',
    args: [address],
    address: App3Abi.lockedSavingsAddress as `0x${string}`,
    abi: App3Abi.lockedSavingsAbi,
  });
  return {
    result,
    data: result.data as {
      amount: number;
      createdAt: bigint;
      expiresAt: bigint;
      purpose: string;
    }[],
  };
};
