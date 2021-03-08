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
        idtrademark: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        idcategory: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        idcolor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    };

    let config = {
        tableName: "product",
        timestamps: false,
    };


    let Product = sequelize.define(alias,cols,config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category,{
            as: "categoriasProductos",
            foreignKey:"idcategory"
        });
        Product.belongsTo(models.Color,{
            as: "coloresProductos",
            foreignKey:"idcolor"
        });

       Product.belongsTo(models.Trademark,{
            as: "marcasProductos",
            foreignKey:"idtrademark"
        });
    
    }

    

    return Product;
}