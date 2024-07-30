import { Request, NextFunction, Response, RequestHandler } from 'express'
import { z } from 'zod'
import { BadRequestError } from '../exceptions/BadRequestError'
import { ErrorCode } from '../exceptions/RootError'
import { pick } from '../lib/pick'

type RequestType = 'params' | 'query' | 'body'

export const validate = (schema: z.ZodSchema): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        const validSchema: z.ZodSchema = pick(schema, ['params', 'query', 'body'])
        const object: Partial<Record<RequestType, unknown>> = pick(req, Object.keys(validSchema))

        const result = schema.safeParse(req)

        if (result.success) {
            Object.assign(req, result.data)
            return next()
        }

        return next(new BadRequestError('Bad Request', ErrorCode.BAD_REQUEST, result.error.issues))
    }
}
