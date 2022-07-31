const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [4, 10],
                    msg: "User name must be between 4 to 10 characters"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'Invalid Email'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        freezeTableName: true,
        tableName: 'users'
    })
}