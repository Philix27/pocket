"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-green-300 via-teal-500 to-lime-500`}
    >
      <div className={` `}>
        <h1 className={`pl-5 pt-5 text-2xl font-extrabold`}>
          Super<span className={`text-white`}>Save</span>
        </h1>

        <div className={` flex w-full items-center justify-center my-10`}>
          <img src={"./wallet.png"} className="h-[30vh] w-auto" />
        </div>

        <p
          className={`flex w-full items-center justify-center p-4 text-center`}
        >
           Welcome to SupaSave, where you can
          securely lock your funds for a set
          period, helping you grow your savings 
          effortlessly. Plan for the future
          with confidence—start saving smarter today!
        </p>

        <div className={`mt-4  flex items-center justify-center`}>
          <Link
            href={"/deposit"}
            className={`rounded-lg border-2 border-white bg-white px-8  py-2 text-center font-bold`}
          >
            Deposit Now
          </Link>
        </div>
      </div>
    </div>
  )
}
