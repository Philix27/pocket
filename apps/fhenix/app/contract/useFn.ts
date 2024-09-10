import { AppContract } from "@/contract"
import { useReadContract } from "wagmi"

export const useGetAllDeposit = (userAddress: `0x${string}`) => {
  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getAllDeposits",
    args: [userAddress],
  })

  return {
    isLoading: result.isLoading,
    data: result.data as {
      amount: number
      createdAt: bigint
      expiresAt: bigint
      purpose: string
    }[],
    error: result.error,
  }
}

export const useGetDepositDetails = (
  userAddress: `0x${string}`,
  index: number
) => {
  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getDepositDetails",
    args: [userAddress, index],
  })

  return {
    isLoading: result.isLoading,
    error: result.error,
    data: result.data as {
      amount: number
      createdAt: bigint
      expiresAt: bigint
      purpose: string
    },
  }
}

export const useGetRemainingLockTime = (
  userAddress: `0x${string}`,
  index: number
) => {
  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getRemainingLockTime",
    args: [userAddress, index],
  })

  return {
    isLoading: result.isLoading,
    error: result.error,
    data: result.data as number,
  }
}
