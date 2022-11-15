const express = require('express')
const User = require('./models/user')
const sequelize = require('./database')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

console.log(User === sequelize.models.User)

app.listen(port, () => console.log(`Listening on port ${port}`))