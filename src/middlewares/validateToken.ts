import { NextFunction, Request, RequestHandler, Response } from 'express'
import jwt from 'jsonwebtoken'
import { TokenError } from '../exceptions/TokenError'
import { ErrorCode } from '../exceptions/RootError'
import { prisma } from '../lib/db'
import { Prisma } from '@prisma/client'

const userPersonalData = Prisma.validator<Prisma.UserDefaultArgs>()({
    select: { email: true, name: true, id: true },
})

type User = Prisma.UserGetPayload<typeof userPersonalData>

declare global {
    namespace Express {
        export interface Request {
            user: User
        }
    }
}

export const validateToken: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const token = req.cookies.token // Assuming the token is stored in a cookie named 'token'
        if (!token) {
            throw new Error('Invalid token')
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { sub: string }
        const userId = decoded.sub // Assuming 'sub' contains the user ID

        // Check if the user exists in your system (using Prisma)
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })

        if (!user) {
            throw new TokenError('Invalid token', ErrorCode.INVALID_TOKEN)
        }

        // Attach user information to the request
        req.user = user
        next()
    } catch (error) {
        // Redirect to the login page
        res.redirect('/auth/login')
    }
}
