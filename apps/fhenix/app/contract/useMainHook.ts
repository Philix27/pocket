"use client"

import { useCallback, useEffect, useState } from "react"
import { stableTokenABI } from "@celo/abis"
import { BrowserProvider, Contract, ethers } from "ethers"
import { createPublicClient, formatEther, getContract, http } from "viem"
import { celoAlfajores } from "viem/chains"

import { AppContract, TokenAddress } from "."

function formatBalance(cUSDBalance: any, decimals = 2) {
  const balanceNumber = parseFloat(cUSDBalance)
  if (isNaN(balanceNumber)) {
    return "0.00"
  }
  return balanceNumber.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const useMain = () => {
  const [cUSDBalance, setCUSDBalance] = useState<string>("0")
  const [userAddress, setUserAddress] = useState<string>("0")

  const getCUSDBalance = useCallback(async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()

        const client = createPublicClient({
          chain: celoAlfajores,
          transport: http(),
        })

        const StableTokenContract = getContract({
          abi: stableTokenABI,
          address: AppContract.cusdTokenAddress as `0x${string}`,
          client,
        })
        const address = await signer.getAddress()
        setUserAddress(address)
        let cleanedAddress = address.substring(2)
        const balanceInBigNumber = await StableTokenContract.read.balanceOf([
          `0x${cleanedAddress}`,
        ])
        const balanceInWei = balanceInBigNumber
        const balanceInEthers = formatEther(balanceInWei)

        setCUSDBalance(balanceInEthers)
      } catch (error) {
        console.error("Error fetching cUSD balance:", error)
      }
    }
  }, [])

  useEffect(() => {
    getCUSDBalance()
  }, [])

  return {
    cUSDBalance,
    userAddress,
    formattedBalance: formatBalance(cUSDBalance),
  }
}

export const useDeposit = () => {
  const depositFunds = async (props: {
    purpose: string
    timeInSeconds: number
    amount: number
    // _signerAddress: `0x${string}` | undefined
  }) => {
    const tokenAmount = ethers.parseUnits(props.amount.toString(), 18)
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const address = await signer.getAddress()
        // approve txn

        const tokenContract = new ethers.Contract(
          AppContract.cusdTokenAddress,
          TokenAddress.erc20Abi,
          signer
        )

        const tx = await tokenContract.approve!(
          AppContract.address,
          tokenAmount
        )
        console.log("Transaction approved!:", tx)
        // cons
        await tx.wait()
        // contract call
        const contract = new Contract(
          AppContract.address,
          AppContract.abi,
          signer
        )

        const txn = await contract.deposit!(
          props.timeInSeconds,
          tokenAmount,
          props.purpose
        )
        await txn.wait()
      } catch (error) {
        console.error("Error fetching cUSD balance:", error)
      }
    }
  }

  // useEffect(() => {
  //   getCUSDBalance()
  // }, [])

  return {
    depositFunds,
  }
}

export const useGetDeposit = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const depositFunds = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const address = await signer.getAddress()

        const contract = new Contract(
          AppContract.address,
          AppContract.abi,
          signer
        )

        const txn = await contract.getAllDeposits!(address)
        await txn.wait
        setIsLoading(false)
        // console.log("getAllDeposits:", txn)
        console.log("getAllDeposits5:", Object.keys(txn["5"]))
        console.log("getAllDeposits51:", txn["5"]["1"])
      } catch (error) {
        console.error("getAllDeposit Err::", error)
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    depositFunds()
  }, [])

  return {
    isLoading,
  }
}
