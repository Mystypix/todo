import { Task } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  addTask: protectedProcedure.input(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ).mutation(({ctx, input}) => {
    console.log('input', input)
    // return ctx.prisma.task.create({
    //   data: {
    //     ...input,
    //     user: {
    //       connect: {
    //         email: ctx.session.user.email || undefined,
    //       }
    //     }
    //   }
    // })
  }),
  // removeTask: protectedProcedure.mutation(({ctx, rawInput}) => {
  //   return ctx.prisma.task.delete({
  //     where: {
  //       id: rawInput.id
  //     }
  //   })
  // }),
  // getUnresolved: protectedProcedure.query(({ctx}) => {
  //   return ctx.prisma.task.findMany({
  //     where: {
  //       status: {
  //         not: 'done',
  //       },
  //     }
  //   })
  // })
});
