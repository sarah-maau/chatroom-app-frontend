export interface IJWTToken {
  accessToken: string
  accessTokenExpiration: number
  refreshToken: string
  refreshTokenExpiration: number
}

export interface ILoginParams {
  email: string
  password: string
}

export interface IUser {
  id: string
  email: string
  name: string
}
