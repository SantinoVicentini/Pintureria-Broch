var express = require('express');
var router = express.Router();
var productosApiController = require("../../controllers/api/productosController")

router.get("/", productosApiController.list);

router.get('/:id', productosApiController.find);

module.exports = router;