
const db = require("../../database/models");


let apisController = {
    contarProductos : (req, res) =>{
        db.Product.findAll()
        .then((data) => {
            let dataProductos = {
                meta: {
                    url: "http://localhost:3030/api/contarProductos",
                    status: 200,
                    state: "OK"

                },

                data: {
                    quantity: data.length,

                }
            }
            res.json(dataProductos);
        })
    },


    contarUsuarios : (req, res) =>{
        db.User.findAll()
        .then((data) => {
            let DataUsuarios = {
                meta: {
                    url: "http://localhost:3030/api/contarUsuarios",
                    status: 200,
                    state: "OK"

                },

                data: {
                    quantity: data.length,

                }
            }
            res.json(DataUsuarios);
        })
    },

    contarVentas : (req, res) =>{
        db.Cart.findAll( {where:{status : 0}})
        .then((data) => {
            let DataVentas = {
                meta: {
                    url: "http://localhost:3030/api/contarVentas",
                    status: 200,
                    state: "OK"

                },

                data: {
                    quantity: data.length,

                }
            }
            res.json(DataVentas);
        })
    },
}

module.exports = apisController;
