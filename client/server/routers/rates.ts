import { publicProcedure, router } from '@/server';
import { z } from 'zod';

enum RatesStatus {
  BUY = 'BUY',
  SELL = 'SELL',
}

export const ratesRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.rates.findMany();
  }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        amount: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.rates.update({
        where: {
          id: input.id,
        },
        data: {
          amount: input.amount,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        amount: z.number(),
        currency: z.string(),
        symbol: z.string(),
        status: z.nativeEnum(RatesStatus),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.rates.create({
        data: {
          amount: input.amount,
          currency: input.currency,
          symbol: input.symbol,
          status: 'BUY',
        },
      });
    }),
});
