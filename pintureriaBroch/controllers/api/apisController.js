
const db = require("../../database/models");


let apisController = {
    contarProductos : (req, res) =>{
        db.Product.findAll()
        .then((data) => {
            let productsData = {
                meta: {
                    url: "http://localhost:3030/api/contarProductos",
                    status: 200,
                    state: "OK"

                },

                data: {
                    quantity: data.length,

                }
            }
            res.json(productsData);
        })
    },


    contarUsuarios : (req, res) =>{
        db.User.findAll()
        .then((data) => {
            let usersData = {
                meta: {
                    url: "http://localhost:3030/api/contarUsuarios",
                    status: 200,
                    state: "OK"

                },

                data: {
                    quantity: data.length,

                }
            }
            res.json(usersData);
        })
    },
}

module.exports = apisController;
