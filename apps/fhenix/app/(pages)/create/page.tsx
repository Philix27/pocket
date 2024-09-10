"use client"

import React from "react"
import { FHE } from "@/contract"
import { toast } from "sonner"
import { useAccount } from "wagmi"

import UserTransactions from "./UserTransactions"
import { FormData, schema } from "./schema"

export default function CreatePage() {
  const { createEscrow } = FHE.useCreateEscrow()
  const account = useAccount()

  return (
    <div className={`mt-[70px]`}>
      <div className={`px-4`}>
        <div
          className={`w-ful my-4 flex justify-between rounded-lg border-2 border-primary bg-accent p-5`}
        >
          <div>
            <p className="text-sm">Wallet Balance:</p>
            <h1 className="text-xl font-extrabold">cUSD</h1>
          </div>
          <img src={"./wallet2.png"} className="h-full w-[70px]" />
        </div>
        <div className="mx-3">
          <p>Lock your savings with few clicks</p>
        </div>

        <hr />
        <UserTransactions userAddress={account.address!} />
      </div>
    </div>
  )
}
