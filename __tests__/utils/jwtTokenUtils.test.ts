import jwtTokenUtils from '../../utils/jwtTokenUtils'

describe('jwtTokenUtils', () => {
  it('returns true if token is expired', () => {
    const expiredToken = Date.now() / 1000

    expect(jwtTokenUtils.isTokenExpired(expiredToken)).toBeTruthy()
  })

  it('returns false if token is not expired', () => {
    const validToken = Date.now() / 1000 + 10000

    expect(jwtTokenUtils.isTokenExpired(validToken)).toBeFalsy()
  })
})
