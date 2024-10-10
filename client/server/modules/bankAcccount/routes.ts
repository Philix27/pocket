import { publicProcedure, router } from '@/server';
import { z } from 'zod';

export const bankAccountRouter = router({
  get_account_info: publicProcedure
    .input(z.object({ walletAddress: z.string(), accountNumber: z.string() }))
    .query(async ({ ctx, input }) => {
      // todo: use account number to retrieve name
    }),
  get_all: publicProcedure.input(z.object({ user_id: z.string() })).query(async ({ ctx, input }) => {
    return await ctx.prisma.bank_account.findMany({
      where: {
        user_id: input.user_id,
      },
    });
  }),

  delete: publicProcedure
    .input(z.object({ user_id: z.string(), accountId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.bank_account.delete({
          where: {
            user_id: input.user_id,
            id: input.accountId,
          },
        });

        return {
          msg: 'Deleted successfully',
        };
      } catch (error) {
        return {
          msg: 'Sorry, account could not be deleted',
        };
      }
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
