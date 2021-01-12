module.exports = (sequelize, datatypes) => {



    let alias = "Trademark";
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: datatypes.STRING,
        },

    };
    let config = {
        tableName: "Trademarks", /* no es necesario si el archivo tiene bien el nombre */
        timestamps: false,
    };

    const Trademark = sequelize.define(alias, cols, config);

    Trademark.associate = function(models) {
        Trademark.hasMany (models.Product, {
            as: "Product",
            foreignKey: "product_id"
        });
    }

    return Trademark;

}