const db = require('../models')
const User = db.user

module.exports = () => {
  User.bulkCreate([
    {
      name: "Haseeb user",
      email: "user@test.com",
      password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
    },
    {
      name: "Haseeb Admin",
      email: "admin@test.com",
      password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
      role: "admin",
    },
  ]);
}