import { publicProcedure, router } from "@/server";
import { z } from "zod";

export const bookChaptersRouter = router({
  get_all: publicProcedure
    .input(z.object({ book_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapter.findMany({
        where: {
          book_id: input.book_id,
        },
      });
    }),
  get_with_topics: publicProcedure
    .input(z.object({ book_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapter.findMany({
        where: {
          book_id: input.book_id,
        },
        select: {
          topics: true,
        },
      });
    }),
  get_by_id: publicProcedure
    .input(z.object({ chapter_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapter.findFirst({
        where: {
          id: input.chapter_id,
        },
      });
    }),
  create: publicProcedure
    .input(z.object({ title: z.string(), book_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapter.create({
        data: {
          title: input.title,
          book_id: input.book_id,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ chapter_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapter.delete({
        where: {
          id: input.chapter_id,
        },
      });
    }),
});
