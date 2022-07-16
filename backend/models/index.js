const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

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

db.category = require("./category")(sequelize, Sequelize);
db.product = require("./product")(sequelize, Sequelize);

// db.category.hasMany(db.product)
db.category.hasMany(db.product, 
    {
        foreignKey:
        {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false 
        }
    })
db.product.belongsTo(db.category)

module.exports = db;