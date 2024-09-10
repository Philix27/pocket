"use client"

import React, { ReactNode } from "react"
import { Button, Loader } from "@/comps"
import { FHE } from "@/contract"
import { useAccount } from "wagmi"

import { shortAddress } from "@/app/shortAddress"

export default function Page() {
  const { address } = useAccount()
  const {
    data,
    result: { isLoading, error },
  } = FHE.useGetAllTransactionsForUser(address!)

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }
  return (
    <div className="flex w-full flex-col">
      <p>All Transactions</p>

      {data.map((val, i) => (
        <div key={i} className="bg-card mb-2 flex flex-col rounded-md p-2">
          <div className="flex items-center justify-between">
            <p>Buyer:</p>
            <p> {shortAddress(val.buyer)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Amount:</p>

            <div className="flex items-center justify-between">
              <p>Seller:</p>
              <p> {Number(val.amount).toString()}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p>Seller:</p>
            <p> {shortAddress(val.seller)}</p>
          </div>

          <div className="flex items-center justify-between">
            Status:
            {val.isCompleted ? (
              <p className="text-green-500">Completed</p>
            ) : (
              <p className="text-orange-600">Pending</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            Dispute:
            {val.isDisputed ? (
              <p className="text-destructive">Disputed</p>
            ) : (
              <p className="text-green-500">No dispute</p>
            )}
          </div>
          <Button>Dispute</Button>
        </div>
      ))}
    </div>
  )
}

export function ReleaseFunds() {
  const {
    releaseFunds,
    result: { data, error },
  } = FHE.useReleaseFunds()

  return (
    <div>
      <Button
        onClick={() => {
          releaseFunds(1)
        }}
      >
        Release Funds
      </Button>
    </div>
  )
}
