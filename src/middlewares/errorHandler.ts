import { NextFunction, Request, Response } from 'express'
import { RootError } from '../exceptions/RootError'
import { BadRequestError } from '../exceptions/BadRequestError'
import { TokenError } from '../exceptions/TokenError'

type ErrorType = RootError | BadRequestError | TokenError

export const errorHandler = (err: RootError, req: Request, res: Response, next: NextFunction) => {
    console.log('Error: ==================> ', err)
    res.status(err.statusCode).send({
        message: err.message,
        errorCode: err.errorCode,
        success: false,
        error: err.error,
    })
}
