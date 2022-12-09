const db = require('../models')
const User = db.user

const { generateString } = require('../utils/helpers')

const users = [];

users[0] = {
  name: "Super Admin",
  email: "admin@test.com",
  password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
  role: "admin",
};

for (let index = 1; index <= 1000; index++) {
  users[index] = {
    name: `${generateString(6)} User ${index}`,
    email: `user${index}@test.com`,
    password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
    avatar: `https://picsum.photos/id/${index}/204/215`
  };
}

module.exports = () => {
  User.bulkCreate(users);
}


// module.exports = () => {
//   User.bulkCreate([
//     {
//       name: "Super Admin",
//       email: "admin@test.com",
//       password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
//       role: "admin",
//     },
//     {
//       name: "User 1",
//       email: "user1@test.com",
//       password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
//     },
//     {
//       name: "User 2",
//       email: "user2@test.com",
//       password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
//     },
//     {
//       name: "User 3",
//       email: "user3@test.com",
//       password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
//     },
//     {
//       name: "User 4",
//       email: "user4@test.com",
//       password: "$2b$08$tD1epQXB6t3hYseRy0ROh.RKUvkg/1bldp1RXvXi8/Hg.apyvR06O",
//     },
//   ]);
// }