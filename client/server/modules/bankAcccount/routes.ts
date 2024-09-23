import { publicProcedure, router } from '@/server';
import { z } from 'zod';

export const bankAccountRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.bank_account.findMany();
  }),

  delete: publicProcedure
    // .use(async (opts) => {
    //   const { ctx } = opts;
    //   if (!ctx.user?.isAdmin) {
    //     throw new TRPCError({ code: 'UNAUTHORIZED' });
    //   }
    //   return opts.next({
    //     ctx: {
    //       user: ctx.user,
    //     },
    //   });
    // })
    .input(z.object({ accountId: z.string(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.bank_account.delete({
          where: {
            user_id: input.userId,
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
