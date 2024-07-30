import httpStatus from 'http-status'
import { NextFunction, Request, Response } from 'express'
import catchAsync from '../lib/catchAsync'
import { getFlightService } from '../services/flightService'

export const getFlights = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    await getFlightService(req)

    res.status(httpStatus.CREATED).send({
        success: true,
        message: 'found flights',
        data: '',
    })
})
