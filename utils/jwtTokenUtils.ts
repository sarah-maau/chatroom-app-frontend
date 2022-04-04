const isTokenExpired = (tokenExpiration: number): boolean => tokenExpiration - Date.now() / 1000 <= 0

export default {
  isTokenExpired
}
