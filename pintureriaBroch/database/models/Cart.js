module.exports = (sequelize, datatypes) => {

    let alias = "Cart";
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: datatypes.INTEGER,
        },

        total: {
            type: datatypes.STRING,
        },

    };
    let config = {
        tableName: "Categories", /* no es necesario si el archivo tiene bien el nombre */
        timestamps: false,
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.belongsTo (models.User, {
        as: "user",
        foreignKey: "user_id"
    });

    Cart.belongsToMany (models.Cart, {
        as: "cart",
        through: "cart_product",
        foreignKey: "product_id",
        otherKey: "cart_id",
        timestamps: false,
    });   

    return Cart;

}