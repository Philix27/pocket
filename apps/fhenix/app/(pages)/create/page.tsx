"use client"

import React from "react"
import { FHE, useMain } from "@/contract"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import AllTransactions from "../all-transactions/page"
import UserTransactions from "./UserTransactions"
import { FormData, schema } from "./schema"

export default function CreatePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const { formattedBalance, userAddress } = useMain()
  const { createEscrow } = FHE.useCreateEscrow()

  const submitData = async (formData: FormData) => {
    try {
      createEscrow(
        "0xe6b6aAe8fA2718F5371e30F2ad2eEDa250801BB5",
        formData.amount
      )
      toast("Escrow created successfully " + formData.amount)
    } catch (error) {
      toast("Oops an error occured")
    }
  }

  return (
    <div className={`mt-[70px]`}>
      <div className={`px-4`}>
        <div
          className={`w-ful my-4 flex justify-between rounded-lg border-2 border-primary bg-accent p-5`}
        >
          <div>
            <p className="text-sm">Wallet Balance:</p>
            <h1 className="text-xl font-extrabold">{formattedBalance}cUSD</h1>
          </div>
          <img src={"./wallet2.png"} className="h-full w-[70px]" />
        </div>
        <div className="mx-3">
          <p>Lock your savings with few clicks</p>
        </div>
        <div className={`mx-2 my-4 flex flex-col items-center justify-center`}>
          <form onSubmit={handleSubmit(submitData)}>
            <div className={` w-full space-y-5 pb-4`}>
              <input
                type="number"
                placeholder="Amount"
                {...register("amount", { valueAsNumber: true })}
                className={`w-full border-2 border-primary p-2  text-black`}
              />
              {errors.amount && (
                <span className={`text-red-700`}>{errors.amount.message}</span>
              )}
            </div>

            <div className={`mt-6  flex items-center justify-center`}>
              <button
                type="submit"
                className={`rounded-lg bg-primary px-8  py-2 text-center font-bold text-white`}
              >
                Next
              </button>
            </div>
          </form>
        </div>
        <hr />
        <UserTransactions userAddress={userAddress} />
      </div>
    </div>
  )
}
