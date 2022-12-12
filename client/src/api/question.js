import http from 'utils/http'

export const createQuestion = async (message, receiverId, senderId) => {
  try {
    return await http.post(`ask/user/${receiverId}`, { message, senderId })
      .then(res => ({ status: 'success', msg: res.data.msg, data: res.data.question }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

export const allQuestions = async (page = 1) => {
  try {
    return await http.get(`app?page=${page}`)
      .then(res => ({ data: res.data.rows, count: res.data.count }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

export const profileQuestions = async (receiverId, page = 1) => {
  try {
    return await http.get('questions/user', { params: { receiverId, page } })
      .then(res => ({ data: res.data.rows, count: res.data.count }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

export const getQuestion = async (questionId) => {
  try {
    return await http.get(`question/${questionId}`)
      .then(res => ({ data: res.data }))
  } catch ({ response }) {
    return ({ status: 'error', msg: response.data.msg })
  }
}
