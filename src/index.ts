import express, { Express, NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import router from './routes/router'
import { errorHandler } from './middlewares/errorHandler'

dotenv.config()
const app: Express = express()

const corsConfig = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
}

app.use(cors(corsConfig))
app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.status(200)
    res.send({ message: 'Get response from server' })
})

//add route here
app.use('/v1/api', router)

app.use(errorHandler)

export default app
