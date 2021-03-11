module.exports = function (sequelize, DataTypes) {
    
    let alias = "Cart";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    }

        let config = {
            tablename:"cart",
            timestamps: false,
            freezeTableName: true
        };
        
        let Cart = sequelize.define(alias,cols,config);

        Cart.associate = function(models) {
            Cart.belongsToMany(models.Product, {
                as: "products",
                through: "cart_product",
                foreignKey: "carrito_id",
                otherKey: "product_id",
            });


        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id"
        });
    
    }
        return Cart;
       
    }