module.exports = function (sequelize, dataTypes) {
    let alias = "Trademark";
   
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
        timestamps: false,
        freezeTableName: true,
    }
   

    
       let Trademark = sequelize.define(alias,cols,config);

      Trademark.associate = function(models) {
        Trademark.hasMany(models.Product,{
            as: "marcas_productos",
            foreignKey:"idtrademark"
        })
    }
   
    return Trademark;
   
   }