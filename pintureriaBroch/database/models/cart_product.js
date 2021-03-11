module.exports = (sequelize, dataTypes) => {
    let alias = "Cart_Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        carrito_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE(),
            "allowNull" : false

        },
        updatedAt: {
            type: dataTypes.DATE(),
            "allowNull" : false

        }

    };
    let config = {
        tableName: "cart_product",
        timestamps: true

    };

let Cart_Product = sequelize.define(alias, cols, config);

     Cart_Product.associate = function (models) {
      Cart_Product.belongsTo(models.Cart, {
        as: 'carts',
        foreignKey: 'carrito_id',
      });
    };
    
    Cart_Product.associate = function (models) {
        Cart_Product.belongsTo(models.Product, {
          as: 'products',
          foreignKey: 'product_id',
        });
      };

    return Cart_Product;
}