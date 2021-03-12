module.exports = function (sequelize, DataTypes) {
    
    let alias = "User";

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
        username: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
    };

    let config = {
        tableName: "user",
        timestamps: false,
    };


    let User = sequelize.define(alias, cols, config);
    
    User.associate = function(models) {
        User.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "user_id"
        });
    }

    return User;
}