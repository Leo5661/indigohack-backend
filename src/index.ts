import express, { Express, NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

const app: Express = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.status(200)
  res.send({ message: 'Get response from server' })
})

// add route here
// app.use('/v1/api', routes)

// app.use(errorHandler)

export default app
