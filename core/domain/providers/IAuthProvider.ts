import { IJWTToken, ILoginParams, IUser } from './index'

export interface IAuthProvider {
  login(data: ILoginParams): Promise<IJWTToken>

  getCurrentUser(): Promise<IUser>
}
