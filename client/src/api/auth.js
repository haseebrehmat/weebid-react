import http from 'utils/http'

export const signup = (name, email, password, terms) => http.post('auth/signup', {
  name, email, password, terms,
})
  .then(({ data }) => ({ status: 'success', msg: data.message }))
  .catch(({ response }) => ({ status: 'error', msg: response.data.message }))

export const signin = (email, password) => http.post('auth/signin', { email, password })
  .then(({ data }) => ({ status: 'success', msg: data.message }))
  .catch(({ response }) => ({ status: 'error', msg: response.data.message }))
