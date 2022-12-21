import http from 'utils/http'

export const createBid = async ({ cents, questionId, userId }) => {
  const response = await http.post(`make/pledge/${questionId}`, { cents, userId })
  return response.data
}

export const questionPledges = async (questionId, page = 1) => {
  try {
    return await http.get('question/bids', { params: { questionId, page } })
      .then(res => ({ data: res.data.rows, count: res.data.count }))
  } catch (error) {
    return ({ status: 'error', msg: error.response.data.msg })
  }
}
