import { ZodSchema, z } from 'zod'

export const registerSchema: ZodSchema = z.object({
    body: z.object({
        name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
        email: z.string().email({ message: 'Email is required' }),
        password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    }),
})

export const loginSchema: ZodSchema = z.object({
    body: z.object({
        email: z.string().email({ message: 'Email is required' }),
        password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    }),
})
