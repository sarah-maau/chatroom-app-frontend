const NODE_ENV = process.env.NODE_ENV || 'development'
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL || 'https://chatroom-api-backend.onrender.com'
const HTTP_CLIENT_DEFAULT_TIMEOUT = process.env.NEXT_PUBLIC_HTTP_CLIENT_DEFAULT_TIMEOUT || '10000'


export { API_ENDPOINT, NODE_ENV, HTTP_CLIENT_DEFAULT_TIMEOUT }
