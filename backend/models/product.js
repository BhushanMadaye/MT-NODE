module.exports = (sequelize, DataTypes) => {
    return sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        freezeTableName: true,
        tableName: 'products'
    });

    // Product.associate = (models) => {
    //     console.log(models);
    //     console.log(`-----------------`);
    //     Product.hasOne(models.category, { foreignKey: 'categoryID', as: 'category' });
    // }

    // Product.associate = function(models) {
    //     Product.belongsTo(models.category, { foreignKey: 'categoryID', as: 'category'})
    // }

};