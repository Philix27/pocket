"use client"

import { Suspense } from "react"
import { Loader } from "@/comps"
import { useMain } from "@/contract"

import SavingsCards from "./Savings"
// https://github.com/Philix27/SupaSave
export default function WithdrawalPage() {
  const { userAddress } = useMain()

  if (!userAddress) {
    return (
      <div className="mt-[70px]">
        <Loader />
      </div>
    )
  }

  return (
    <div className={`mt-[70px] px-6 md:max-w-[60%]`}>
      <h1 className={`my-4 text-xl font-bold text-primary`}>Withdrawal</h1>

      <div className={`mt-2`}>
        <div className={`flex items-start justify-between`}>
          <p>Wallet Address:</p>
          {userAddress && (
            <p>
              {userAddress!
                .substring(0, 3)
                .concat("***")
                .concat(
                  userAddress!.substring(
                    userAddress!.length - 3,
                    userAddress!.length
                  )
                )}
            </p>
          )}
        </div>
        <div className={`mt-2 flex items-start justify-between`}>
          <p>Total Savings:</p>
          <p>$100</p>
        </div>

        {userAddress && (
          <Suspense fallback={<Loader />}>
            <SavingsCards address={userAddress as `0x${string}`} />
          </Suspense>
        )}
      </div>
    </div>
  )
}
