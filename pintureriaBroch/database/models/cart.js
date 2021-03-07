module.exports = function (sequelize, DataTypes) {
    
    let alias = "Cart";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        status: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
        
    }

        let config = {
            tablename:"cart",
            timestamps: false
        };
        
        let Cart = sequelize.define(alias,cols,config);

        Cart.associate = function(models) {
            Cart.belongsToMany(models.Products, {
                as: "products",
                through: "cart_product",
                foreignKey: "cart_id",
                otherKey: "product_id",
            });


        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id"
        });
    
    }
        return Cart;
       
    }