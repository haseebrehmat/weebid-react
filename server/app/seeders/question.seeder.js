const db = require('../models')
const Question = db.question

const questions = [];

for (let index = 1; index <= 1000; index++) {
  questions.push({
    message: `It is the message ${index}`,
    senderId: Math.floor(Math.random() * 1000) + 2,
    receiverId: Math.floor(Math.random() * 1000) + 2,
  });
}

module.exports = () => {
  Question.bulkCreate(questions);
}

// module.exports = () => {
//   Question.bulkCreate([
//     {
//       message: "It is the message 1",
//       senderId: 2,
//       receiverId: 2,
//     },
//     {
//       message: "It is the message 2",
//       senderId: 2,
//       receiverId: 3,
//     },
//     {
//       message: "It is the message 3",
//       senderId: 2,
//       receiverId: 4,
//     },
//     {
//       message: "It is the message 4",
//       senderId: 2,
//       receiverId: 5,
//     },
//     {
//       message: "It is the message 5",
//       senderId: 3,
//       receiverId: 3,
//     },
//   ]);
// }