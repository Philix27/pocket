"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-green-300 via-teal-500 to-lime-500`}
    >
      <div className={` `}>
        <h1 className={`pl-5 pt-5 text-2xl font-extrabold`}>
          Pocket<span className={`text-white`}>Escrow</span>
        </h1>

        <div className={` my-10 flex w-full items-center justify-center`}>
          <img src={"./wallet.png"} className="h-[30vh] w-auto" />
        </div>

        <p
          className={`flex w-full items-center justify-center p-4 text-center`}
        >
          An app that facilitates p2p exchange in a reliable and secure manner
        </p>

        <div className={`mt-4  flex items-center justify-center`}>
          <Link
            href={"/orders"}
            className={`rounded-lg border-2 border-white bg-white px-8  py-2 text-center font-bold`}
          >
            Deposit Now
          </Link>
        </div>
      </div>
    </div>
  )
}
