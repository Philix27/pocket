"use client"

import React, { useEffect } from "react"
import { Loader } from "@/comps"
import { FHE } from "@/contract"

export default function UserTransactions(props: { userAddress: string }) {
  const {
    data,
    result: { isLoading, error },
  } = FHE.useGetAllTransactionsForUser(props.userAddress)

  useEffect(() => {
    return () => {}
  }, [])

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <p className="text-destructive">{error.message}</p>
  }
  return (
    <div className="flex flex-col w-full">
      <p>UserTransactions</p>
      <button onClick={async () => {}}>Fetch</button>
      {/* {data!.toString()} */}
      {data &&
        data.map((val, i) => (
          <div
            key={i}
            className="flex flex-col bg-teal-100 mb-2 p-2 rounded-md"
          >
            <p>Buyer: {val.buyer}</p>
            <p>Amount: {val.amount}</p>
            <p>Seller: {val.seller}</p>
          </div>
        ))}
    </div>
  )
}
