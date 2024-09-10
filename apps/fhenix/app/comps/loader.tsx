"use client"

import React from "react"
import { ThreeDots } from "react-loader-spinner"

export function Loader() {
  return (
    <div className="w-full flex items-center justify-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#39bc09"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}
