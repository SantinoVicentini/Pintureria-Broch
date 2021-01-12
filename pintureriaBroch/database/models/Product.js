module.exports = (sequelize, datatypes) => {



    let alias = "Product";
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: datatypes.STRING,
        },

        description: {
            type: datatypes.STRING,
        },

        price: {
            type: datatypes.STRING,
        },

        image: {
            type: datatypes.STRING,
        },
        category_id: {
            type: datatypes.INTEGER,
        },
        trademark_id: {
            type: datatypes.INTEGER,
        },

    };
    let config = {
        tableName: "Products", /* no es necesario si el archivo tiene bien el nombre */
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo (models.Category, {
            as: "category",
            foreignKey: "category_id"
        });
        Product.belongsTo (models.Trademark, {
            as: "trademark",
            foreignKey: "trademark_id"
        });
        Product.belongsToMany (models.Cart, {
            as: "cart",
            through: "cart_product",
            foreignKey: "product_id",
            otherKey: "cart_id",
            timestamps: false,
        });   
    }

    return Product;

}