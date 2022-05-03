module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
        categoryID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryName: {
            type: DataTypes.STRING
        }
    },
        {
            freezeTableName: true,
            tableName: 'categories'
        });

    // Category.associate = (models) => {
    //     Category.hasMany(models.product, { foreignKey: 'productID' });
    // }

    // Category.associate = function(models) {
    //     Category.hasMany(models.products, { foreignKey: 'categoryID', as: 'products' });
    // }


    return Category;
};