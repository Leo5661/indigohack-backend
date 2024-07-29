import httpStatus from 'http-status'
import { RootError, RootErrorProps } from './RootError'

export class TokenError extends RootError {
  constructor(message: string, errorCode: number) {
    super({
      message: message,
      errorCode: errorCode,
      statusCode: httpStatus.UNAUTHORIZED,
      error: null,
    })
  }
}
