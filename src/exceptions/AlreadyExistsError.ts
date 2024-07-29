import httpStatus from 'http-status'
import { RootError } from './RootError'

export class AlreadyExistsError extends RootError {
  constructor(message: string, errorCode: number) {
    super({
      message: message,
      errorCode: errorCode,
      statusCode: httpStatus.FORBIDDEN,
    })
  }
}
