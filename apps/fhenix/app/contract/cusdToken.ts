import { BrowserProvider, ethers } from "ethers"

import { collector } from "./env"

export const TokenAddress = {
  CUSD_MAINNET: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
  CUSD_TESTNET: "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1",
  CELO_MAINNET: "",
  CELO_TESTNET: "",
  erc20Abi: [
    "function balanceOf(address owner) view returns (uint256)",
    "function transfer(address to, uint256 amount) returns (bool)",
    "function approve(address spender, uint256 amount) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
  ],
}

export async function transferCusdTokens(props: {
  userAddress: `0x${string}`
  // to: string
  amount: number
}): Promise<string> {
  const { userAddress, amount } = props
  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner(userAddress)

  const tokenContract = new ethers.Contract(
    TokenAddress.CUSD_TESTNET,
    TokenAddress.erc20Abi,
    signer
  )

  // const recipient = to
  const tokenAmount = ethers.parseUnits(amount.toString(), 18) // Assuming the token has 18 decimals

  // Transfer the tokens
  const tx = await tokenContract.transfer!(collector, tokenAmount)
  console.log("Transaction hash:", tx.hash)

  // Wait for the transaction to be mined
  const receipt = await tx.wait()
  console.log("Transaction confirmed in block:", receipt.blockNumber)
  return tx.hash as string
}
