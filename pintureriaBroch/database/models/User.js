module.exports = (sequelize, datatypes) => {

    const User = sequelize.define(alias, cols, config);


    let alias = "User";
    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: datatypes.STRING,
        },

        userName: {
            type: datatypes.STRING,
        },

        email: {
            type: datatypes.STRING,
        },

        password: {
            type: datatypes.STRING,
        },

        avatar: {
            type: datatypes.STRING,
        },


    };
    let config = {
        tableName: "Users", /* no es necesario si el archivo tiene bien el nombre */
        timestamps: false,
    };

    User.associate = function(models) {
        User.BelongsToMany (models.Cart, {
            as: "carts",
            through: "cart_user",
            foreignKey: "user_id",
            otherKey: "cart_id",
            timestamps: false,
        } )
    }

    return User;

}