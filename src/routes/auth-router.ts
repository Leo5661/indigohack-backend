import { Router } from 'express'
import { validate } from '../middlewares/validate'
import { loginSchema, registerSchema } from '../schema/userSchema'
import { login, register } from '../controllers/userController'
import { validateToken } from '../middlewares/validateToken'

const authRouter = Router()

authRouter.post('/register', validate(registerSchema), register)
authRouter.post('/login', validate(loginSchema), login)

export default authRouter
