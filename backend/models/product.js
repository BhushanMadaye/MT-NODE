module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        categoryID: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            // foreignKey: true
        },
        // categoryID:{
        //     type: DataTypes.INTEGER,
        //     field: 'categoryID',
        //     allowNull: true,
        // },
        productID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING
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

    return Product;
};