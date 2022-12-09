const { question: Question } = require("../models")

exports.create = async (req, res) => {
  try {
    const { id: receiverId } = req.params
    const { message, senderId } = req.body
    const question = await Question.create({ message, receiverId, senderId })
    return res.json({ msg: "Question was created successfully!", question: question.toJSON() })
  } catch (error) {
    return res.status(500).send({ msg: err.message })
  }
};

exports.index = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const response = await Question.findAndCountAll({
      include: ['sender', 'receiver'],
      limit: 8,
      offset: (page - 1) * 8,
    });
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: err.message || "Some error occurred while retrieving questions." });
  }
}

exports.userQuestions = async (req, res) => {
  try {
    const { receiverId, page = 2 } = req.query;
    const response = await Question.findAndCountAll({
      include: ['sender', 'receiver'],
      where: { receiverId },
      limit: 8,
      offset: (page - 1) * 8,
    });
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: err.message || "Some error occurred while retrieving users." });
  }
}