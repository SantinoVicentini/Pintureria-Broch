module.exports = function (sequelize, dataTypes) {
    let alias = "Categoria";
   
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
        tablename:"category",
        timestamps: false
    }
    
       let Categoria = sequelize.define(alias,cols,config);

       Categoria.associate = function(models) {
        Categoria.hasMany(models.Product,{
            as: "productos",
            foreignKey:"idcategory"
        })
    }

   
    return Categoria;
   
   }