export type ApiError = {
  statusCode: number
  message: string
  isOperational?: boolean
  stack?: string
}
export function createApiError({ statusCode, message, isOperational = true, stack }: ApiError) {
  const err: any = new Error(message)
  err.statusCode = statusCode
  err.isOperational = isOperational
  err.success = false

  if (stack) {
    err.stack = stack
  } else {
    Error.captureStackTrace(err, createApiError)
  }

  return err
}
