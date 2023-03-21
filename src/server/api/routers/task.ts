import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  addTask: protectedProcedure.mutation(({ctx, rawInput}) => {
    return ctx.prisma.task.create({
      data: {
        ...rawInput,
        user: {
          connect: {
            email: ctx.session.user.email,
          }
        }
      }
    })
  }),
  removeTask: protectedProcedure.mutation(({ctx, rawInput}) => {
    return ctx.prisma.task.delete({
      where: {
        id: rawInput.id
      }
    })
  }),
  getUnresolved: protectedProcedure.query(({ctx, input}) => {
    return ctx.prisma.task.findMany({
      where: {
        status: {
          not: 'done',
        },
      }
    })
  })
});
