import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

const postDto = z.object({
  status: z.enum(["draft", "published"]).optional(),
  title: z.string().min(5, "Titulo precisa conter ao menos 5 caracteres"),
  slug: z.string().min(5, "Slug precisa conter ao menos 5 caracteres"),
  content: z.string().min(5, "Content precisa conter ao menos 5 caracteres"),
});

const validatePostCreate = z
  .object({
    id: z.string(),
    updatedAt: z.date().default(new Date()),
    createdAt: z.date().default(new Date()),
    userId: z.string(),
  })
  .merge(postDto);

const validatePostUpdate = z
  .object({
    id: z.string(),
    updatedAt: z.date().default(new Date()),
  })
  .merge(postDto);

export const postApi = createTRPCRouter({
  create: protectedProcedure
    .input(validatePostCreate)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id;

      const post = {
        title: input.title,
        slug: input.slug,
        content: input.content,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: input.status ?? "draft",
      };

      await ctx.prisma.post.create({
        data: post,
      });

      return post;
    }),
  update: protectedProcedure
    .input(validatePostUpdate)
    .mutation(({ input, ctx }) => {
      const userId = ctx.session.user.id;

      const post = {
        title: input.title,
        slug: input.slug,
        content: input.content,
        userId,
        updatedAt: new Date(),
        status: input.status ?? "draft",
      };

      ctx.prisma.post.update({
        where: {
          id: input.id,
          userId: ctx.session.user.id,
        },
        data: post,
      });

      return post;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
