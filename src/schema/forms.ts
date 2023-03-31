import * as z from "zod";

export const fastAddItemSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
})

export const complexAddItemSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    dueDate: z.object({
        startDate: z.string(),
        endDate: z.string(),
    }),
})

export type FastAddItemSchema = z.infer<typeof fastAddItemSchema>;
export type ComplexAddItemSchema = z.infer<typeof complexAddItemSchema>;
