const userSeeder = require('./user.seeder')
const questionSeeder = require('./question.seeder')

module.exports = () => {
  userSeeder(),
  questionSeeder()
}
