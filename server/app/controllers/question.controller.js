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
    const { id } = req.query;
    var condition = id ? { receiverId: id } : null;
    const questions = await Question.findAll({
      include: ['sender', 'receiver'],
      where: condition,
    });
    return res.send(questions);
  } catch (error) {
    return res.status(500).send({ msg: err.message || "Some error occurred while retrieving users." });
  }
}