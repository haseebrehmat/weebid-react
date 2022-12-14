import http from 'utils/http'

export const createBid = async ({ cents, questionId, userId }) => {
  const response = await http.post(`make/pledge/${questionId}`, { cents, userId })
  return response.data
}
