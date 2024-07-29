import httpStatus from 'http-status'
import { RootError } from './RootError'

export class BadRequestError extends RootError {
  constructor(message: string, errorCode: number, error: any) {
    super({
      message: message,
      errorCode: errorCode,
      statusCode: httpStatus.BAD_REQUEST,
      error: error,
    })
  }
}
