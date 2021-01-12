module.exports = (sequelize, datatypes) => {



    let alias = "Category";
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: datatypes.STRING,
        },

    };
    let config = {
        tableName: "Categories", /* no es necesario si el archivo tiene bien el nombre */
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany (models.Product, {
            as: "Product",
            foreignKey: "product_id"
        });
    }

    return Category;

}