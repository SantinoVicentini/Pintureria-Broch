module.exports = function (sequelize, dataTypes) {
 let alias = "Color";

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
     tablename:"color",
     timestamps: false
 }
 
    let Color = sequelize.define(alias,cols,config);

     Color.associate = function(models) {
           Color.hasMany(models.Product,{
               as: "productos",
               foreignKey:"color_id"
           })
       }

 return Color;

}