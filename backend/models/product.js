module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        categoryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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

    Product.associate = (models) => {
        Product.belongsTo(models.category, { foreignKey: 'categoryID', as: 'category' });
    }

    return Product;
};