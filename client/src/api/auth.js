import http from 'utils/http'
import { saveToken } from 'utils/helpers'

export const signup = (email, password) => http.post('auth/signup', { email, password })
  .then(res => {
    saveToken(res.data.accessToken)
    return { status: 'success', msg: res.data.message }
  })
  .catch(error => ({ status: 'error', msg: error.response.data }))

export const signin = (email, password) => http.post('auth/signin', { email, password })
  .then(res => {
    saveToken(res.data.accessToken)
    return { status: 'success', msg: res.data.message }
  })
  .catch(error => ({ status: 'error', msg: error.response.data }))
