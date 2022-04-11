import { AxiosError } from 'axios'

import { ErrorCode, IApiError } from '../../domain/httpClient/IApiError'

class ApiError extends Error implements IApiError {
    public status: number
    public code: ErrorCode
    private isApiError: boolean

    constructor(message: string, code?: string, status?: number) {
      super(message)
      this.code = ApiError.parseErrorCode(code)
      this.status = status || 500
      this.isApiError = true
    }

    static fromAxiosError(axiosError: AxiosError): ApiError {
      const message =
            axiosError?.response?.data?.message ||
            axiosError.message ||
            'An unexpected error occured'
      const code = axiosError?.response?.data.code || axiosError.code || ''
      const status = axiosError?.response?.status || 500
      return new ApiError(message, code, status)
    }

    static parseErrorCode(value?: string): ErrorCode {
      let error: ErrorCode
      switch (value) {
      case 'DATA_NOT_FOUND':
        error = ErrorCode.DATA_NOT_FOUND
        break
      case 'BAD_REQUEST':
        error = ErrorCode.BAD_REQUEST
        break
      case 'UNAUTHORIZED':
        error = ErrorCode.UNAUTHORIZED
        break
      case 'EXPIRED_TOKEN':
        error = ErrorCode.EXPIRED_TOKEN
        break
      case 'ACCOUNT_NOT_FOUND':
        error = ErrorCode.ACCOUNT_NOT_FOUND
        break
      case 'WRONG_CREDENTIALS':
        error = ErrorCode.WRONG_CREDENTIALS
        break
      case 'ECONNABORTED':
        error = ErrorCode.NETWORK_ERROR
        break
      default:
        error = ErrorCode.UNKNOWN_ERROR
      }
      return error
    }
}

export default ApiError
