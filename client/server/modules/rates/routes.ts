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
        walletAddress: z.string(),
        id: z.string(),
        buyPrice: z.number(),
        sellPrice: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.rates.update({
        where: {
          id: input.id,
        },
        data: {
          buyPrice: input.buyPrice,
          sellPrice: input.sellPrice,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        walletAddress: z.string(),
        buyPrice: z.number(),
        sellPrice: z.number(),
        currency: z.string(),
        symbol: z.string(),
        title: z.string(),
        status: z.nativeEnum(RatesStatus),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.rates.create({
        data: {
          buyPrice: input.buyPrice,
          sellPrice: input.sellPrice,
          currency: input.currency,
          symbol: input.symbol,
          title: input.title,
          status: 'AVAILABLE',
        },
      });
    }),
});
