"use client"

import Link from "next/link"
import { BiMoneyWithdraw } from "react-icons/bi"
import { BsBank } from "react-icons/bs"
import { FaHome } from "react-icons/fa"

export default function Footer() {
  return (
    <div
      className={`fixed bottom-0 flex w-[100%] items-center justify-between py-2 text-center bg-accent`}
    >
      <div
        className={
          "flex h-[40px] w-full items-center justify-around text-center"
        }
      >
        <Link href={"/"} className={"text-primary"}>
          <FaHome size={20} />
        </Link>
        <Link href={"/deposit"} className={"  text-primary"}>
          <BsBank size={20} />
        </Link>
        <Link href={"/withdrawal"} className={" text-primary"}>
          <BiMoneyWithdraw size={20} />
        </Link>
      </div>
    </div>
  )
}
