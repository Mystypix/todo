import * as z from "zod";

export const fastAddItemSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
})

export const complexAddItemSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
})

export type FastAddItemSchema = z.infer<typeof fastAddItemSchema>;
export type ComplexAddItemSchema = z.infer<typeof complexAddItemSchema>;
