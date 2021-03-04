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
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        color_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        trademark_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: "product",
        timestamps: false,
    };


    let Product = sequelize.define(alias,cols,config);

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

    

    return Product;
}