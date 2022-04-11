import { IHttpClient } from '../../domain/httpClient/IHttpClient'
import HttpClient from '../../data/httpClient'
import { API_ENDPOINT } from '../../config'
import {IChatRoomProvider} from '../../domain/providers/IChatRoomProvider'
import ChatRoomProvider from '../../data/providers/ChatRoomProvider'


export interface IDependencies {
  httpClient: IHttpClient
  chatRoomProvider?: IChatRoomProvider
}

export const createDependencies = (): IDependencies => {
  const httpClient = new HttpClient(API_ENDPOINT)
  const chatRoomProvider = new ChatRoomProvider(httpClient)
  return {
    httpClient,
    chatRoomProvider
  }
}
