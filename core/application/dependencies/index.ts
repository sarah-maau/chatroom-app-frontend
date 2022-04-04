import { IHttpClient } from '../../domain/httpClient/IHttpClient'
import { IAuthProvider } from '../../domain/providers/IAuthProvider'
import AuthProvider from '../../data/providers/AuthProvider'
import HttpClient from '../../data/httpClient'
import { API_ENDPOINT, GOOGLE_ANALYTICS_ID } from '../../config'
import { ITracker } from '../../domain/analytics/tracker'
import Tracker from '../../data/analytics'

export interface IDependencies {
  authProvider?: IAuthProvider
  httpClient: IHttpClient
  tracker: ITracker
}

export const createDependencies = (): IDependencies => {
  const httpClient = new HttpClient(API_ENDPOINT)
  const authProvider = new AuthProvider(httpClient)
  const tracker = new Tracker(GOOGLE_ANALYTICS_ID)
  return {
    authProvider,
    httpClient,
    tracker
  }
}
