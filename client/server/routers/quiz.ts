import { publicProcedure, router } from "@/server";
import { z } from "zod";

export const quizRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.quiz.findMany();
  }),

  delete: publicProcedure
    .input(z.object({ blog_id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.quiz.delete({
        where: {
          id: input.blog_id,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        question: z.string(),
        option1: z.string(),
        option2: z.string(),
        option3: z.string().optional(),
        option4: z.string().optional(),
        option5: z.string().optional(),
        option6: z.string().optional(),
        answer_index: z.number(),
        answer: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.quiz.create({
        data: {
          question: input.question,
          option1: input.option1,
          option2: input.option2,
          option3: input.option3,
          option4: input.option4,
          option5: input.option5,
          option6: input.option6,
          answer_index: input.answer_index,
          answer: input.answer,
        },
      });
    }),
});
