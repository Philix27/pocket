import { publicProcedure, router } from '@/server';
import { z } from 'zod';

export const bankAccountRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.bank_account.findMany();
  }),

  delete: publicProcedure
    .input(z.object({ accountId: z.string(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.bank_account.delete({
        where: {
          user_id: input.userId,
          id: input.accountId,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        bankName: z.string(),
        accountNumber: z.string(),
        accountName: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.bank_account.create({
        data: {
          user_id: input.userId,
          bankName: input.bankName,
          accountName: input.accountName,
          accountNo: input.accountNumber,
        },
      });
    }),
});
