import { PrismaClient } from '@prisma/client'
import { withPulse } from '@prisma/extension-pulse'

const globalPrisma = globalThis as unknown as {
    prisma: any | undefined
}

export const prisma =
    globalPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    }).$extends(
        withPulse({
            apiKey: process.env.PRISMA_PULSE_API_KEY as string,
        }),
    )

if (process.env.NODE_ENV !== 'production') globalPrisma.prisma = prisma
