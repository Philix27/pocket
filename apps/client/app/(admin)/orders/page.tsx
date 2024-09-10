"use client"

import React, { useState } from "react"
import { FHE } from "@/contract"
import { toast } from "sonner"

import { IOrder, OrdersList } from "./data"
import { shortAddress } from "@/lib"

export default function Page() {
  const [order, setOrder] = useState<IOrder>()
  const { createEscrow } = FHE.useCreateEscrow()

  const submitData = async () => {
    if (!order) {
      toast.error("Please select an order")
      return
    }

    try {
      createEscrow(order?.sellerAddress, order?.amount)
      toast("Escrow created successfully " + order.amount)
    } catch (error) {
      toast("Oops an error occured")
    }
  }
  return (
    <div className="w-full overflow-y-scroll">
      <p className="my-3 font-bold">Orders</p>
      {OrdersList.map((value, index) => (
        <div key={index} className="bg-card mb-4 rounded-lg p-2">
          <Row title="Seller" subtitle={value.name} />
          <Row title="Amount" subtitle={value.amount.toString()} />
          <Row title="Payment method" subtitle={value.paymentMethod} />
          <Row
            title="Seller Address"
            subtitle={shortAddress(value.sellerAddress)}
          />
          <div
            className="bg-primary text-primary-foreground flex items-center justify-center rounded-lg p-2"
            onClick={() => {
              setOrder(value)
              submitData()
            }}
          >
            Buy Now
          </div>
        </div>
      ))}
    </div>
  )
}

function Row(props: { title: string; subtitle: string; isLast?: boolean }) {
  return (
    <>
      <div className={"flex w-full items-center justify-between p-2 "}>
        <p className="text-muted">{props.title}</p>
        <p className="font-bold">{props.subtitle}</p>
      </div>
    </>
  )
}
