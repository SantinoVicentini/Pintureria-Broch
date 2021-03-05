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
        }}

        let config = {
            tablename:"cart",
            timestamps: false
        };
        
        let Cart = sequelize.define(alias,cols,config);
    /*
           Cart.associate = function(models) {
            Categoria.hasMany(models.Product,{
                as: "productos",
                foreignKey:"category_id"
            })
        }*/
    
       
        return Cart;
       
       }