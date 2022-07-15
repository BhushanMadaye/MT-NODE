module.exports = (sequelize, DataTypes) => {
    return sequelize.define("category", {
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


    // return Category;
};