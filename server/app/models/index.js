const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, DataTypes)
db.question = require("./question.model.js")(sequelize, DataTypes)


// Relations
db.question.belongsTo(db.user, { foreignKey: 'senderId' });
db.question.belongsTo(db.user, { foreignKey: 'receiverId' });

module.exports = db;