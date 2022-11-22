const { verifySignUp } = require("../middlewares")
const authController = require("../controllers/auth.controller");

module.exports = (app) => {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", [
    verifySignUp.checkDuplicateEmail,
  ], authController.signup);

  app.post("/api/auth/signin", authController.signin);
};