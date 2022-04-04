import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { IHttpClient } from '../../domain/httpClient/IHttpClient'
import { ILoginData, ILoginPayload, IUserData } from '../../domain/httpClient'

class HttpClient implements IHttpClient {
  public http: AxiosInstance

  constructor(baseURL: string) {
    const config: AxiosRequestConfig = {
      baseURL: `${baseURL}/api/v1`,
      headers: {
        'content-type': 'application/json'
      }
    }
    this.http = axios.create(config)

    this.http.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.http.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  static createErrorLog(error: AxiosError): string {
    if (error.response) {
      return `Error : ${error.response.status} - ${error.message.toString()} `
    }
    return `Error : ${error.message.toString()}`
  }

  async login(payload: ILoginPayload): Promise<ILoginData> {
    throw Error(`login is not implemented ${payload}`)
  }

  async getCurrentUser(): Promise<IUserData> {
    throw Error('getUser is not implemeted')
  }
}

export default HttpClient
