import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { IHttpClient } from '../../domain/httpClient/IHttpClient'
import {
  IRoomDetailsData,
  IRoomListData,
  IProfileData,
  IProfileDetailsData, IRoomData, IMessageDetailsData
} from '../../domain/httpClient'
import routes from './routes'
import ApiError from './ApiError'
import { HTTP_CLIENT_DEFAULT_TIMEOUT } from '../../config'

class HttpClient implements IHttpClient {
  public http: AxiosInstance

  constructor(baseURL: string) {
    const config: AxiosRequestConfig = {
      baseURL: `${baseURL}/api/v1`,
      timeout: Number.parseInt(HTTP_CLIENT_DEFAULT_TIMEOUT),
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
        if (axios.isAxiosError(error)) {
          return Promise.reject(ApiError.fromAxiosError(error))
        }
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

  setLanguageHeader(lang: string) {
    this.http.defaults.headers.common['lang'] = lang
  }

  async getRoomDetails(id: string): Promise<IRoomDetailsData> {
    const { data } = await this.http.get<IRoomDetailsData>(
      routes.ROOMSBYID(id)
    )
    return data
  }

  async getRoomList(): Promise<IRoomListData> {
    const { data } = await this.http.get<IRoomListData>(
      routes.ROOMS
    )
    return data
  }

  async getProfile(): Promise<IProfileData> {
    const { data } = await this.http.get<IProfileData>(
      routes.PROFILES
    )
    return data
  }

  async getRoom(): Promise<IRoomData> {
    const { data } = await this.http.get<IRoomData>(
      routes.ROOMS
    )
    return data
  }

  async getProfileDetails(id: string): Promise<IProfileDetailsData> {
    const { data } = await this.http.get<IProfileDetailsData>(
      routes.PROFILESBYID(id)
    )
    return data
  }

  async getMessageDetails(id: string): Promise<IMessageDetailsData> {
    const { data } = await this.http.get<IMessageDetailsData>(
      routes.PROFILESBYID(id)
    )
    return data
  }

}


export default HttpClient
