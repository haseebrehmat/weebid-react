module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define("question", {
    message: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
    },
    type: {
      type: DataTypes.INTEGER(4),
      defaultValue: 0,
    },
    bidGoal: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rewardsText: {
      type: DataTypes.TEXT
    }
  });

  return Question;
}