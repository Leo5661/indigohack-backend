import { NextFunction, Request, RequestHandler, Response } from 'express'
import jwt from 'jsonwebtoken'
import { TokenError } from '../exceptions/TokenError'
import { ErrorCode } from '../exceptions/RootError'

declare global {
    namespace Express {
        export interface Request {
            clerkId: string
        }
    }
}

const getPlainToken = (token: string): string | undefined => {
    const tokenSet = token.split(' ')
    if (tokenSet.length == 2) {
        if (tokenSet[0] == 'Bearer') {
            return tokenSet[1]
        } else {
            return undefined
        }
    }
    return undefined
}

export const validateToken: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
    const publicKey = process.env.CLERK_PEM_PUBLIC_KEY as string
    const token = req.headers.authorization

    if (!token) {
        return next(new TokenError('Unauthenticated', ErrorCode.INVALID_TOKEN))
    }

    try {
        if (token) {
            const plainToken = getPlainToken(token)
            if (!plainToken) {
                return next(new TokenError('Unauthenticated', ErrorCode.INVALID_TOKEN))
            }
            const decoded = jwt.verify(plainToken, publicKey)
            req.body.clerkId = decoded.sub as string
            return next()
        }
    } catch (error) {
        console.log('catch on validate token', error)
        return next(new TokenError('Unauthenticated', ErrorCode.INVALID_TOKEN))
    }
}
