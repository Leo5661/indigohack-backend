import httpStatus from 'http-status'
import { createUser, getUser } from '../services/userService'
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../lib/catchAsync'
import { AlreadyExistsError } from '../exceptions/AlreadyExistsError'
import { ErrorCode } from '../exceptions/RootError'

export const register = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { user, token } = await createUser(req)

    res.cookie('hthToken', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60),
    })

    res.status(httpStatus.CREATED).send({
        success: true,
        message: 'Sign up Successful',
        data: user,
    })
})

export const login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id, email, name, createdAt, image, token } = await getUser(req)

    res.cookie('hthToken', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60),
    })

    res.status(httpStatus.FOUND).send({
        success: true,
        message: 'Login Successful',
        data: { id, email, name, createdAt, image },
    })
})
