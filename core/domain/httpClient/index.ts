export interface ILoginData {
  accessToken: string
  accessTokenExpiration: number
  refreshToken: string
  refreshTokenExpiration: number
}

export interface ILoginPayload {
  email: string
  password: string
}

export interface IUserData {
  id: string
  email: string
  name: string
}
