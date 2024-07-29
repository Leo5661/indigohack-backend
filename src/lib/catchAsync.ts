import { Request, Response, NextFunction } from 'express'
import { ErrorCode, RootError } from '../exceptions/RootError'
import { InternalError } from '../exceptions/InternalError'
import {
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
} from '@prisma/client/runtime/library'
import { AlreadyExistsError } from '../exceptions/AlreadyExistsError'
import { BadRequestError } from '../exceptions/BadRequestError'

const catchAsync = (method: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await method(req, res, next)
        } catch (error: any) {
            let exception: RootError
            if (error.errorCode === 1001) {
                exception = error as AlreadyExistsError
            } else if (error.errorCode === 1002) {
                exception = error as BadRequestError
            } else if (error instanceof RootError) {
                exception = error as RootError
            } else if (error instanceof PrismaClientInitializationError) {
                console.log('!!Database connection!!: error code', error.errorCode)
                exception = new InternalError('Something went wrong', ErrorCode.INTERNAL_ERROR)
            } else if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    console.log('!!Database Client!!: error code', error.message)
                    exception = new AlreadyExistsError(
                        'Form Code already exist',
                        ErrorCode.ALREADY_EXISTS_ERROR,
                    )
                } else {
                    console.log('!!Database Client!!: error code', error.message)
                    exception = new InternalError('Something went wrong', ErrorCode.INTERNAL_ERROR)
                }
            } else {
                exception = new InternalError('Something went wrong', ErrorCode.INTERNAL_ERROR)
            }
            next(exception)
        }
    }
}

export default catchAsync
