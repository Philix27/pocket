import { BrowserProvider, Contract } from "ethers"

import { AppContract } from "."

export async function getUserAddress() {
  if (window.ethereum) {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    return accounts[0] as string
  }
  //   return false
}

export async function geAppContract(userAddress: string) {
  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner(userAddress)

  return new Contract(AppContract.address, AppContract.abi, signer)
}
