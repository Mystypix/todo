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
  ).mutation(({ctx, input}) => {
    return ctx.prisma.task.create({
      data: {
        ...input,
        user: {
          connect: {
            email: ctx.session.user.email || undefined,
          }
        }
      }
    })
  }),
  removeTask: protectedProcedure.input(
    z.object({
      id: z.string(),
    })
  ).mutation(({ctx, input}) => {
    return ctx.prisma.task.delete({
      where: {
        id: input.id
      }
    })
  }),
  getUnresolved: protectedProcedure.query(({ctx}) => {
    return ctx.prisma.task.findMany({
      where: {
        status: {
          not: 'done',
        },
      }
    })
  })
});
