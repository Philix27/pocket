import { publicProcedure, router } from "@/server";
import { z } from "zod";

export const bookChapterTopicsRouter = router({
  get_by_book: publicProcedure
    .input(z.object({ book_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapterTopic.findMany({
        where: {
          book_id: input.book_id,
        },
      });
    }),
  get_by_chapter: publicProcedure
    .input(z.object({ chapter_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapterTopic.findMany({
        where: {
          chapter_id: input.chapter_id,
        },
      });
    }),
  get_by_book_and_chapter: publicProcedure
    .input(z.object({ book_id: z.string(), chapter_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapterTopic.findMany({
        where: {
          chapter_id: input.chapter_id,
          book_id: input.book_id,
        },
      });
    }),

  get_by_id: publicProcedure
    .input(z.object({ topic_id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapterTopic.findFirst({
        where: {
          id: input.topic_id,
        },
      });
    }),
  delete: publicProcedure
    .input(z.object({ topic_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapterTopic.delete({
        where: {
          id: input.topic_id,
        },
      });
    }),
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        book_id: z.string(),
        chapter_id: z.string(),
        content: z.string(),
        video_url: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapterTopic.create({
        data: {
          title: input.title,
          content: input.content,
          video_url: input.video_url,
          book_id: input.book_id,
          chapter_id: input.chapter_id,
        },
      });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string().min(0, { message: "Required" }),
        title: z.string().min(0, { message: "Required" }),
        content: z.string().min(0, { message: "Required" }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.bookChapterTopic.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          content: input.content,
        },
      });
    }),
});
