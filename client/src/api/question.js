import http from 'utils/http'

export const createQuestion = async (message, senderId, receiverId) => {
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
      .then(res => ({ data: res.data }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}

// export const profileQuestions = async (receiverId) => {
//   try {
//     return await http.get('app', { params: { id: receiverId } })
//       .then(res => ({ data: res.data }))
//   } catch (error) {
//     return ({ status: 'error', msg: error.response.data.msg })
//   }
// }
