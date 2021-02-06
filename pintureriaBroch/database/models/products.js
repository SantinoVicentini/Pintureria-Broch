module.exports = function (sequelize, DataTypes) {
    
    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.STRING,

        },
        price: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.STRING,
        },
        category_id: {
            type: DataTypes.INTEGER,
        }, 
        color_id: {
            type: DataTypes.INTEGER,
        }, 
        trademark_id: {
            type: DataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "product",
        timestamps: false,
    };


    let product = sequelize.define(alias, cols, config);
/*
    Product.associate = function(models) {
        Product.belongsTo(models.Categoria,{
            as: "categoria",
            foreignKey:"category_id"
        });
        Product.belongsTo(models.Color,{
            as: "color",
            foreignKey:"color_id"
        });

       Product.belongsTo(models.Marca,{
            as: "trademark",
            foreignKey:"trademark_id"
        });
    
    }

    */

    return product;
}