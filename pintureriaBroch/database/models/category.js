module.exports = function (sequelize, dataTypes) {
    let alias = "Category";
   
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
        timestamps: false,
     freezeTableName: true
    }
    
       let Category = sequelize.define(alias,cols,config);

       Category.associate = function(models) {
        Category.hasMany(models.Product,{
            as: "categorias_productos",
            foreignKey:"idcategory",
        })
    }

   
    return Category;
   
   }