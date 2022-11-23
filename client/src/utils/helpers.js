import { TOKEN } from 'utils/constants'

export const saveToken = token => localStorage.setItem(TOKEN, JSON.stringify(token))

export const getToken = () => JSON.parse(localStorage.getItem(TOKEN))

export const removeToken = () => localStorage.removeItem(TOKEN)
