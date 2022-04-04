import { ILoginData, ILoginPayload, IUserData } from './index'

export interface IHttpClient {
  login(payload: ILoginPayload): Promise<ILoginData>

  getCurrentUser(): Promise<IUserData>
}
