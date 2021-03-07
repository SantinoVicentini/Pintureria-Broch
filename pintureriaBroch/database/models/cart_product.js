module.exports = (sequelize, dataTypes) => {
    let alias = "Cart_Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        cart_id: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "cart_product",
        timestamps: false
    };

let Cart_Product = sequelize.define(alias, cols, config);

     Cart_Product.associate = function (models) {
      Cart_Product.belongsTo(models.Cart, {
        as: 'carts',
        foreignKey: 'cart_id',
      });
    };

    return Cart_Product;
}