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

    return Category;
};