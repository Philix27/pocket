import { JsonRpcProvider } from 'ethers';
// import { EncryptionTypes, FhenixClient, SupportedProvider } from "fhenixjs"

import { App3Abi } from '.';

export async function encrypt(data: number | `0x${string}`) {
  // initialize your web3 provider
  const provider = new JsonRpcProvider('https://api.helium.fhenix.zone');

  // const client = new FhenixClient({
  //   provider: provider as SupportedProvider,
  // })

  // // to encrypt data for a Fhenix contract
  // if (typeof data === "number") {
  //   return await client.encrypt(data, EncryptionTypes.uint8)
  // } else {
  //   return await client.encrypt_address(data)
  // }
}

export async function decrypt(cipherText: string) {
  // initialize your web3 provider
  const provider = new JsonRpcProvider('https://api.helium.fhenix.zone');

  // const client = new FhenixClient({
  //   provider: provider as SupportedProvider,
  // });

  // // to unseal data returned from a Fhenix contract
  // return client.unseal(App3Abi.p2pContractAddress, cipherText);
}
