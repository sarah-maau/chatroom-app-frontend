import User from '../models/user/User'
import { IHttpClient } from '../../domain/httpClient/IHttpClient'
import { IAuthProvider } from '../../domain/providers/IAuthProvider'
import { ILoginData, IUserData } from '../../domain/httpClient'
import JWTToken from '../models/jwtToken/JWTToken'
import { ILoginParams } from '../../domain/providers'

class AuthProvider implements IAuthProvider {
  public httpClient: IHttpClient

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient
  }

  static jwtTokenFromJson(jwtTokenData: ILoginData): JWTToken {
    return new JWTToken(jwtTokenData)
  }

  static userFromJson(userData: IUserData): User {
    return new User(userData)
  }

  async login(params: ILoginParams): Promise<JWTToken> {
    const tokenData = await this.httpClient.login(params)
    return AuthProvider.jwtTokenFromJson(tokenData)
  }

  async getCurrentUser(): Promise<User> {
    const currentUserData = await this.httpClient.getCurrentUser()
    return AuthProvider.userFromJson(currentUserData)
  }
}

export default AuthProvider
