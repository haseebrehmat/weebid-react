const { bid: Bid } = require("../models")

exports.createBid = async (req, res) => {
  try {
    const { id: questionId } = req.params
    const { cents, userId } = req.body
    const bid = await Bid.create({ cents, questionId, userId })
    return res.json({ msg: "Bid was created successfully!", data: bid.toJSON() })
  } catch (error) {
    return res.status(500).send({ msg: err.message })
  }
};
