"use client"

import { z } from "zod"

export const schema = z.object({
  amount: z.number(),
  purpose: z
    .string()
    .min(3, { message: "must contain 3 to 10 words " })
    .max(10, { message: "must contain 3 to 10 words " }),

  sholdLock: z.boolean().refine((val) => val === true, {
    message: "You must lock your funds",
  }),

  duration: z.enum(["1week", "2weeks", "3weeks", "4weeks", "5weeks"], {
    errorMap: () => ({ message: "Please select a valid duration" }),
  }),
})

export type FormData = z.infer<typeof schema>

export function durationTransformer(duration: string): number {
  if (duration === "1week") {
    return 1000
  } else if (duration === "2weeks") {
    return 2000
  } else if (duration === "3weeks") {
    return 300
  } else if (duration === "4weeks") {
    return 4000
  } else if (duration === "5weeks") {
    return 5000
  }

  return 500
}
