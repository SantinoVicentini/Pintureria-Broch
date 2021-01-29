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
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        
        },
    };

    let config = {
        tableName: "user",
        timestamps: false,
    };


    let user = sequelize.define(alias, cols, config);


    return user;
}