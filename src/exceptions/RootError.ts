export type RootErrorProps = {
    message: string
    errorCode: ErrorCode
    statusCode: number
    error?: any
}

export enum ErrorCode {
    USER_ALREADY_EXISTS = 1001,
    BAD_REQUEST = 1002,
    INTERNAL_ERROR = 1003,
    ALREADY_EXISTS_ERROR = 1004,
    INVALID_TOKEN = 1005,
}
export class RootError extends Error {
    message: string
    errorCode: ErrorCode
    statusCode: number
    error?: any

    constructor({ message, errorCode, statusCode, error }: RootErrorProps) {
        super(message)
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.error = error
    }
}
