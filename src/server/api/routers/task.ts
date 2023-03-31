import { z } from "zod";
import { complexAddItemSchema, fastAddItemSchema } from "~/schema/forms";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  addFastTask: protectedProcedure.input(fastAddItemSchema).mutation(async ({ctx, input}) => {
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
  addComplexTask: protectedProcedure.input(complexAddItemSchema).mutation(async ({ctx, input}) => {
    try {
      return await ctx.prisma.task.create({
        data: {
          ...input,
          dueDate: input.dueDate.startDate,
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
