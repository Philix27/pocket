import { ReactNode } from "react"

export function Button(props: {
  children: ReactNode
  onClick?: VoidFunction
  className?: string
}) {
  return (
    <button
      className={"rounded-md px-5 py-1 bg-primary text-white" + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
