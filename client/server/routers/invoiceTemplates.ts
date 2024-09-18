import { publicProcedure, router } from '@/server';
import { z } from 'zod';

export const invoiceTemplateRouter = router({
  get_all: publicProcedure.query(async ({ ctx }) => {
    // return await ctx.prisma.blog.findMany();
  }),

  delete: publicProcedure.input(z.object({ blog_id: z.string() })).mutation(async ({ ctx, input }) => {
    // return await ctx.prisma.blog.delete({
    //   where: {
    //     id: input.blog_id,
    //   },
    // });
  }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        subtitle: z.string(),
        img_url: z.string(),
        story: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // return await ctx.prisma.blog.create({
      //   data: {
      //     title: input.title,
      //     subtitle: input.subtitle,
      //     img_url: input.img_url,
      //     story: input.story,
      //   },
      // });
    }),
});
