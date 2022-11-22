const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  }).then(user => {
    if (user) {
      var token = jwt.sign({ user: user }, config.secret, {
        expiresIn: 86400
      });
      return res.json({ msg: 'User was registered successfully!', accessToken: token });
    }
  }).catch(err => res.status(500).send(err.message));
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (!user) return res.status(404).send({ message: "User Not found." });
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) return res.status(401).send({ accessToken: null, message: "Invalid Password!" });
    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
    res.status(200).send({
      data: { ...user, token },
      message: "User was logged in successfully!",
      accessToken: token
    });
  }).catch(err => res.status(500).send({ message: err.message }));
};
