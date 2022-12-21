const { bid: Bid } = require("../models")

exports.createBid = async (req, res) => {
  try {
    const { id: questionId } = req.params
    const { cents, userId } = req.body
    const bid = await Bid.create({ cents, questionId, userId })
    const user = await bid.getUser()
    // bid.setDataValue('user', await bid.getUser())
    return res.json({ msg: `Thanks for supporting ${user.name}. We sent a receipt to your email.`, data: bid })
  } catch (error) {
    return res.status(500).send({ msg: err.message })
  }
};

exports.findQuestionBids = async (req, res) => {
  try {
    const { questionId, page = 2 } = req.query;
    const response = await Bid.findAll({
      where: { questionId },
      include: [{ association: 'user', attributes: ['name', 'avatar'] }],
      limit: 8,
      offset: (page - 1) * 8,
    });
    return res.send(response);
  } catch (error) {
    return res.status(500).send({ msg: error.message || "Some error occurred while retrieving user questions." });
  }
}