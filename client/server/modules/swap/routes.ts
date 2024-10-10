import { publicProcedure, router } from '@/server';
import { z } from 'zod';

enum CurrencyPair {
  CUSD_CELO,
  CELO_CUSD,
  CUSD_CEURO,
  CEURO_CUSD,
  CELO_CEURO,
  CEURO_CELO,
}

export const swapRouter = router({
  supported_networks: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.rates.findMany();
  }),
  swap: publicProcedure
    .input(
      z.object({
        walletAddress: z.string(),
        transactionHash: z.string(),
        from: z.string(),
        to: z.string(),
        currencyPair: z.nativeEnum(CurrencyPair),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // todo verify transaction has been sent earlier using transactionId
    }),
});
