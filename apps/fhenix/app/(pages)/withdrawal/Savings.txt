"use client"

import React, { useState } from "react"
import { Loader } from "@/comps"
import { ContractFn, useGetAllDeposit } from "@/contract"
import { toast } from "sonner"

import { canWithdraw, dateFromBigint, getDate } from "./fn"

export default function SavingsCards(props: { address: `0x${string}` }) {
  const { data, isLoading, error } = useGetAllDeposit(props.address)

  if (isLoading) {
    return (
      <div className="mt-[70px]">
        <Loader />
      </div>
    )
  }
  if (error) {
    return <div className="mt-[70px]">{error.toString()}</div>
  }

  return (
    <div className="mb-[100px]">
      {data.reverse().map((val, index) => (
        <SavingsCard
          key={index}
          index={index}
          purpose={val.purpose}
          amount={val.amount}
          createdAt={val.createdAt}
          expiresAt={val.expiresAt}
          address={props.address!}
        />
      ))}
    </div>
  )
}

function SavingsCard(props: {
  address: `0x${string}`
  purpose: string
  amount: number
  index: number
  expiresAt: bigint
  createdAt: bigint
}) {
  return (
    <div
      className={`mt-5 w-full rounded-lg border-2 border-primary bg-accent p-4`}
    >
      <div className={`flex items-start justify-between`}>
        <p className="font-extrabold">Amount</p>
        <p>${(Number(props.amount) / 1e18).toString()}</p>
      </div>
      <div className={`flex items-start justify-between`}>
        <p className="font-extrabold">Purpose</p>
        <p>{props.purpose}</p>
      </div>

      <div className={`flex items-start justify-between`}>
        <p className="font-extrabold">Withdrawal</p>
        {canWithdraw(getDate(props.expiresAt)) ? (
          <WithdrawBtn
            address={props.address}
            index={props.index}
            amount={Number(props.amount) / 1e18}
          />
        ) : (
          <p className={`text-red-700`}>Not Due</p>
        )}
      </div>
      <hr className="my-2 w-full border-DEFAULT border-secondary" />
      <div className={`flex flex-col items-start justify-between`}>
        <p className={`mb-1 text-sm font-extrabold text-primary`}>Created at</p>
        <p className="text-xs">{dateFromBigint(props.createdAt)}</p>
      </div>
      <hr className="my-2 w-full border-DEFAULT border-secondary" />
      <div className={`flex flex-col items-start justify-between`}>
        <p className={`mb-1 text-sm font-extrabold text-primary`}>Expires at</p>
        <p className="text-xs">{dateFromBigint(props.expiresAt)}</p>
      </div>
    </div>
  )
}

function WithdrawBtn(props: {
  index: number
  address: `0x${string}`
  amount: number
}) {
  if (props.amount == 0) {
    return <p className="text-sm">Has already been withdrawn</p>
  }
  return (
    <button
      className={`rounded-md bg-primary
       px-2 py-1 text-xs font-extrabold
       text-white`}
      onClick={async () => {
        try {
          await ContractFn.withdraw({
            userAddress: props.address,
            index: props.index,
          })
          toast("Withdrawal Successful")
        } catch (error) {
          toast("Oops.. An error occurred")
        }
      }}
    >
      Withdraw
    </button>
  )
}
