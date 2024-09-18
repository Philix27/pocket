"use client"

import React, { memo } from "react"
import { UseFormReturn } from "react-hook-form"

import { AppAccordion, Form } from "@/app/comps"

import { IFormSchema } from "../formSchema"
import { clientInfo, footerInfo, invoiceItems, personalInfo } from "./info"

export const styles = {
  inputGroup: `
    flex flex-col md:flex-row
    w-full flex-grow-[1] 
    md:space-x-8
    items-center 
    justify-center
`,
}

const FormsComps = memo(Comps)

function Comps(props: {
  form: UseFormReturn<IFormSchema>
  onSubmit: (values: IFormSchema) => void
}) {
  const { form, onSubmit } = props

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`
            w-full flex flex-col 
            items-center 
            justify-center 
            my-8
        `}
      >
        <div
          className={"w-[90%] space-y-6 flex flex-col items-start md:w-[75%]"}
        >
          <AppAccordion
            data={[
              personalInfo({ form }),
              clientInfo({ form }),
              invoiceItems({ form }),
              footerInfo({ form }),
            ]}
          />

          {/* <Button type="submit" onClick={() => onsubmit}>Submit</Button> */}
        </div>
      </form>
    </Form>
  )
}

export default FormsComps
