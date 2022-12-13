const { question: Question } = require("../models")
const { receiverAttr, senderAttr } = require('../utils/constants')

exports.createQuestion = async (req, res) => {
  try {
    const { id: receiverId } = req.params
    const { message, senderId } = req.body
    const question = await Question.create({ message, receiverId, senderId })
    return res.json({ msg: "Question was created successfully!", data: question.toJSON() })
  } catch (error) {
    return res.status(500).send({ msg: err.message })
  }
};

exports.findAll = async (req, res) => {
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

exports.findUserQuestions = async (req, res) => {
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
    return res.status(500).send({ msg: err.message || "Some error occurred while retrieving user questions." });
  }
}

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Question.findByPk(id, { include: [{ association: 'sender', attributes: senderAttr }, { association: 'receiver', attributes: receiverAttr }] });
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: err.message || "Some error occurred while retrieving question." });
  }
}