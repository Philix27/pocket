'use client'
import { AppContract, TokenAddress } from '@/contract';
import { ethers, BrowserProvider, Contract } from 'ethers';

export const useDeposit = () => {
  const depositFunds = async (props: {
    purpose: string;
    timeInSeconds: number;
    amount: number;
    // _signerAddress: `0x${string}` | undefined
  }) => {
    const tokenAmount = ethers.parseUnits(props.amount.toString(), 18);
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        // approve txn

        const tokenContract = new ethers.Contract(AppContract.cusdTokenAddress, TokenAddress.erc20Abi, signer);

        const tx = await tokenContract.approve!(AppContract.address, tokenAmount);
        console.log('Transaction approved!:', tx);
        // cons
        await tx.wait();
        // contract call
        const contract = new Contract(AppContract.address, AppContract.abi, signer);

        const txn = await contract.deposit!(props.timeInSeconds, tokenAmount, props.purpose);
        await txn.wait();
      } catch (error) {
        console.error('Error fetching cUSD balance:', error);
      }
    }
  };

  // useEffect(() => {
  //   getCUSDBalance()
  // }, [])

  return {
    depositFunds,
  };
};
