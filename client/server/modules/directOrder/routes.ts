import { publicProcedure, router } from '@/server';
import { z } from 'zod';

export const directOrderRouter = router({
  get_all: publicProcedure
    .input(
      z.object({
        walletAddress: z.string(),
      })
    )
    .query(async (params) => {}),
  cancel: publicProcedure
    .input(
      z.object({
        walletAddress: z.string(),
      })
    )
    .query(async (params) => {}),
  delete: publicProcedure.input(z.object({ walletAddress: z.string() })).mutation(async (params) => {}),
  create: publicProcedure
    .input(
      z.object({
        walletAddress: z.string(),
      })
    )
    .mutation(async (params) => {}),
});
