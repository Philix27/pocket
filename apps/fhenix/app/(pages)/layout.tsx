"use client"

import React, { ReactNode } from "react"

import Footer from "../comps/footer"
import Navbar from "../comps/navbar"

export default function PageLayout(props: { children: ReactNode }) {
  return (
    <div className={"bg-background"}>
      <Navbar />
      <div className={`px-4 py-[70px]`}> {props.children}</div>
      <Footer />
    </div>
  )
}
