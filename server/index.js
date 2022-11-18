const express = require('express')
const cors = require("cors")
const db = require("./app/models")
const Role = db.role

const app = express()

var corsOptions = {
  origin: "http://localhost:3000"
}


app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
    initial();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const initial = () => {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}

require('./app/routes/auth.routes')(app);
require("./app/routes/user.routes")(app);


const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}`))