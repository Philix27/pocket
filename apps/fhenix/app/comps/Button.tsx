import { ReactNode } from "react"

export function Button(props: {
  children: ReactNode
  onClick?: VoidFunction
  className?: string
}) {
  return (
    <button
      className={
        "rounded-md px-5 py-1 bg-primary " +
        props.className
      }
      onClick={props.onClick}
    >
     <span className="text-primary-foreground"> {props.children}</span>
    </button>
  )
}
