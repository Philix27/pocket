import { publicProcedure, router } from "@/server";
import { z } from "zod";

export const booksRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.book.findMany();
  }),
  get_by_id: publicProcedure
    .input(z.object({ book_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.book.findFirst({
        where: {
          id: input.book_id,
        },
      });
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(2, { message: "Min of 2 characters" }),
        desc: z.string().min(2, { message: "Min of 2 characters" }),
        img_url: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.book.create({
        data: {
          title: input.title,
          desc: input.desc,
          img_url: input.img_url,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ book_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.book.delete({
        where: {
          id: input.book_id,
        },
      });
    }),
});
