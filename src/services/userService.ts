import { Request } from 'express'
import { prisma } from '../lib/db'
import bcrypt from 'bcrypt'
import { getUserByEmail } from '../lib/utils'
import { AlreadyExistsError } from '../exceptions/AlreadyExistsError'
import { ErrorCode } from '../exceptions/RootError'
import { TokenError } from '../exceptions/TokenError'
import jwt from 'jsonwebtoken'
import { BadRequestError } from '../exceptions/BadRequestError'

export const createUser = async (req: Request) => {
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password

    const hashedPassword = await bcrypt.hash(password, 10)

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
        throw new AlreadyExistsError('User already exist', ErrorCode.USER_ALREADY_EXISTS)
    } else {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
            select: {
                email: true,
                id: true,
            },
        })

        const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET as string, {
            expiresIn: '1h',
        })
        return { user, token }
    }
}

export const getUser = async (req: Request) => {
    const email = req.body.email
    const password = req.body.password

    const user = await getUserByEmail(email)

    if (user) {
        const { id, email, name, createdAt, image } = user
        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET as string, {
                expiresIn: '1h',
            })
            return {
                id,
                email,
                name,
                createdAt,
                image,
                token,
            }
        } else {
            throw new BadRequestError('Invalid password', ErrorCode.BAD_REQUEST, null)
        }
    } else {
        throw new BadRequestError('Invalid email', ErrorCode.BAD_REQUEST, null)
    }
}
