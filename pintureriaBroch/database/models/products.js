module.exports = function (sequelize, DataTypes) {
    
    let alias = "product";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,

        },
    };

    let config = {
        tableName: "product",
        timestamps: false,
    };


    let product = sequelize.define(alias, cols, config);


    return product;
}