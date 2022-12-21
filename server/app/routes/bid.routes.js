const { authJwt, validateRequest } = require("../middlewares")
const bidController = require("../controllers/bid.controller.js");
const { storeBid } = require('../validations')

module.exports = app => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/question/bids", bidController.findQuestionBids);

  app.post(
    "/api/make/pledge/:id",
    [validateRequest(storeBid)],
    bidController.createBid
  );

};