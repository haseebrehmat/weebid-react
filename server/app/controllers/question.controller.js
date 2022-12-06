const { question: Question } = require("../models")

exports.create =async (req, res) => {
  try {
    const { id: receiverId } = req.params
    const { message, senderId } = req.body
    const question = await Question.create({ message, receiverId, senderId })
    return res.json({ msg: "Question was created successfully!", question: question.toJSON() })
  } catch (error) {
    return res.status(500).send({ msg: err.message })
  }
};