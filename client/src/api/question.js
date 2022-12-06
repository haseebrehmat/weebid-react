import http from 'utils/http'

export const createQuestion = async (message, senderId, receiverId) => {
  try {
    return await http.post(`ask/user/${receiverId}`, { message, senderId })
      .then(res => ({ status: 'success', msg: res.data.msg, data: res.data.question }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}
