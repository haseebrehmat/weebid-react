import http from 'utils/http'

export const signup = async (message, senderId, receiverId) => {
  try {
    return await http.post('auth/signup', { message, senderId, receiverId })
      .then(res => ({ status: 'success', msg: res.data.message }))
  } catch (error) {
    return ({ status: 'error', msg: error.msg })
  }
}
