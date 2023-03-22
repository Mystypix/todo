import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  addTask: protectedProcedure.input(
    z.object({
      title: z.string(),
      description: z.string().optional(),
    })
  ).mutation(async ({ctx, input}) => {
    try {
      return await ctx.prisma.task.create({
        data: {
          ...input,
          user: {
            connect: {
              email: ctx.session.user.email || undefined,
            }
          }
        }
      })
    } catch (error) {
      console.error('Fuck', error)
    }
  }),
  finishTask: protectedProcedure.input(
    z.object({
      id: z.string(),
    })
  ).mutation(async ({ctx, input}) => {
    try {
      return await ctx.prisma.task.update({
        data: {
          status: 'done',
        },
        where: {
          id: input.id,
        }
      })
    } catch (error) {
      console.log('Fuck', error)
    }
  }),
  removeTask: protectedProcedure.input(
    z.object({
      id: z.string(),
    })
  ).mutation(async ({ctx, input}) => {
    try {
      return await ctx.prisma.task.delete({
        where: {
          id: input.id
        }
      })
    } catch (error) {
      console.error('Fuck', error)
    }
  }),
  getUnresolved: protectedProcedure.query(async ({ctx}) => {
    try {
      return await ctx.prisma.task.findMany({
        where: {
          status: {
            not: 'done',
          },
        }
      })
    } catch (error) {
      console.error('Fuck', error)
    }
  })
});
