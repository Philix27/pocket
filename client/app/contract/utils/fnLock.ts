import { BrowserProvider, Contract, ethers } from 'ethers';
import { AppContract, TokenAddress } from '../const';
import { App3Abi } from '../abi';
import { useWalletClient } from 'wagmi';
import { celoAlfajores } from 'viem/chains';

export const useDeposit = (props: {
  purpose: string;
  timeInSeconds: number;
  amount: number;
  _signerAddress: `0x${string}` | undefined;
}) => {
  const { data: walletClient } = useWalletClient();
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

        const contract = new Contract(AppContract.address, App3Abi.lockedSavingsAbi, signer);

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

// export function clientToSigner(client: Client<Transport, Chain, Account>) {
//   const { account, chain, transport } = client;
//   const network = {
//     chainId: celoAlfajores.id,
//     name: celoAlfajores.name,
//     ensAddress: celoAlfajores.contracts?.ensRegistry?.address,
//   };
//   const provider = new providers.Web3Provider(transport, network);
//   const signer = provider.getSigner(account.address);
//   return signer;
// }
