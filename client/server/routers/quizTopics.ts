import { publicProcedure, router } from "@/server";
import { z } from "zod";

export const quizTopicsRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.quizTopic.findMany();
  }),

  delete: publicProcedure
    .input(z.object({ topic_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.quizTopic.delete({
        where: {
          id: input.topic_id,
        },
      });
    }),

  get: publicProcedure
    .input(z.object({ topic_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.quizTopic.findFirst({
        where: {
          id: input.topic_id,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        desc: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.quizTopic.create({
        data: {
          title: input.title,
          desc: input.desc,
        },
      });
    }),
});
