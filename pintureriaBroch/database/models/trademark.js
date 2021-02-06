module.exports = function (sequelize, dataTypes) {
    let alias = "Marca";
   
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tablename:"trademark",
        timestamps: false
    }
    
       let Marca = sequelize.define(alias,cols,config);

      /* Marca.associate = function(models) {
        Marca.hasMany(models.Product,{
            as: "productos",
            foreignKey:"trademark_id"
        })
    }*/
   
    return Marca;
   
   }