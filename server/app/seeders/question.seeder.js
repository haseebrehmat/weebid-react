const db = require('../models')
const Question = db.question

module.exports = () => {
  Question.bulkCreate([
    {
      message: "It is the message 1",
      senderId: 2,
      receiverId: 2,
    },
    {
      message: "It is the message 2",
      senderId: 2,
      receiverId: 3,
    },
    {
      message: "It is the message 3",
      senderId: 2,
      receiverId: 4,
    },
    {
      message: "It is the message 4",
      senderId: 2,
      receiverId: 5,
    },
    {
      message: "It is the message 5",
      senderId: 3,
      receiverId: 3,
    },
  ]);
}