// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'
import { TOKEN } from 'utils/constants'

export const saveToken = token => localStorage.setItem(TOKEN, JSON.stringify(token))

export const getToken = () => JSON.parse(localStorage.getItem(TOKEN))

export const removeToken = () => localStorage.removeItem(TOKEN)

export const decodeJwt = () => (getToken() ? jwt_decode(getToken()) : { user: null })

export const id = () => {
  const { user: { id: userId } } = decodeJwt()
  return userId
}

export const getMsg = error => error?.response?.data?.msg
