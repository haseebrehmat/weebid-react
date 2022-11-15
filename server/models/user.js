const sequelize = require('../database')
const { DataTypes: { STRING } } = require('sequelize')

const User = sequelize.define('User', {
  fullName: {
    type: STRING,
    required: [true, "fullname not provided "],
  },
  email: {
    type: STRING,
    unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "email not provided"],
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }
  },
  role: {
    type: STRING,
    enum: ["normal", "admin"],
    required: [true, "Please specify user role"]
  },
  password: {
    type: STRING,
    required: true
  },
}, {});

module.exports = User

