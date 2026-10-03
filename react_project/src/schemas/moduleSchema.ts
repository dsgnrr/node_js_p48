import { z } from "zod";

export const moduleSchema = z.object({
    title: z.string().min(3, 'Title must have 3 letters at least')
        .max(50, 'Maximum 50 letters for title'),

    description: z.string().max(200, 'Maximum 200 symbols for description')
        .optional(), // nullish() = optional().nullable()

    level: z.enum(['beginner', 'intermediate', 'advanced'], {
        message: 'Please selectr one option: beginner, intermediate, advanced',
    }),

    durationHours: z.coerce.number().min(1, 'Minimal duration must be 1 hour')
        .max(100, 'Maximum duration must be 100 hours'),

    isPublished: z.boolean()
})

// export type ModuleFormData = z.infer<typeof moduleSchema>["form"];
export type ModuleFormData = z.infer<typeof moduleSchema>;

