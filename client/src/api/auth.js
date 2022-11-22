import http from 'utils/http'
import { saveToken } from 'utils/helpers'

export const signup = (name, email, password) => http.post('auth/signup', { name, email, password })
  .then(res => {
    saveToken(res.data.token)
    return { status: 'success', msg: res.data.message }
  })
  .catch(error => ({ status: 'error', msg: error.response.data }))

export const signin = (email, password) => http.post('auth/signin', { email, password })
  .then(({ data: res }) => ({ status: 'success', msg: res.message, data: res.data }))
  .catch(({ response }) => ({ status: 'error', msg: response.data.message }))
