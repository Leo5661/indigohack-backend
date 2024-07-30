import { z } from 'zod'

export const flightSearchSchema = z.object({
    from: z.preprocess(
        (args) => (args === '' ? undefined : args),
        z.string().min(3, { message: 'From must be at least 3 characters' }).optional(),
    ),
    to: z.preprocess(
        (args) => (args === '' ? undefined : args),
        z.string().min(3, { message: 'To must be at least 3 characters' }).optional(),
    ),
    date: z.preprocess(
        (args) => (args === '' ? undefined : args),
        z
            .string()
            .or(z.date())
            .transform((arg) => new Date(arg)),
        z.date().optional(),
    ),
    pnr: z.preprocess(
        (args) => (args === '' ? undefined : args),
        z.string().min(8, { message: 'PNR must be at least 8 characters' }).optional(),
    ),
    flight: z.preprocess(
        (args) => (args === '' ? undefined : args),
        z.string().min(8, { message: 'Flight must be at least 8 characters' }).optional(),
    ),
})
