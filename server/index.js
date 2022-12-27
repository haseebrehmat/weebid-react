const express = require('express')
const cors = require("cors")
require("dotenv").config()

const db = require("./app/models")
const dbSeeder = require('./app/seeders')
const app = express()

var corsOptions = {
  origin: "http://localhost:3000"
}


app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))

/*-----------Migrations & Seeder---------*/
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("Synced db.");
    dbSeeder();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


/*---------------Routes---------------*/
require('./app/routes')(app);

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Listening on port ${port}`))