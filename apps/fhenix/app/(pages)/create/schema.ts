"use client"

import { z } from "zod"

export const schema = z.object({
  amount: z.number(),
})

export type FormData = z.infer<typeof schema>
