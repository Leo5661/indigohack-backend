import { Router } from 'express'
import { validate } from '../middlewares/validate'
import { validateToken } from '../middlewares/validateToken'
import { flightSearchSchema } from '../schema/flightSearchSchema'
import { getFlights } from '../controllers/flightController'

const flightRouter = Router()

const middlewares = [validateToken, validate(flightSearchSchema)]

flightRouter.post('/', middlewares, getFlights)

export default flightRouter
