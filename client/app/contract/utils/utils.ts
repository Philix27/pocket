import { BrowserProvider, Contract } from 'ethers';
import { AppContract } from '../const';
import { App3Abi } from '../abi';

export async function getUserAddress() {
  if (window.ethereum) {
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    return accounts[0] as string;
  }
  //   return false
}

export async function geAppContract(userAddress: string) {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner(userAddress);

  return new Contract(AppContract.address, App3Abi.lockedSavingsAbi, signer);
}

export async function geSigner(userAddress: string) {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner(userAddress);

  return signer;
}
