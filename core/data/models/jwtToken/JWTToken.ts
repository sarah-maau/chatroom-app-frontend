export interface IJWTTokenParams {
  accessToken: string
  accessTokenExpiration: number
  refreshToken: string
  refreshTokenExpiration: number
}

class JWTToken {
  accessToken: string
  accessTokenExpiration: number
  refreshToken: string
  refreshTokenExpiration: number

  constructor({ accessToken, accessTokenExpiration, refreshToken, refreshTokenExpiration }: IJWTTokenParams) {
    this.accessToken = accessToken
    this.accessTokenExpiration = accessTokenExpiration
    this.refreshToken = refreshToken
    this.refreshTokenExpiration = refreshTokenExpiration
  }
}

export default JWTToken
