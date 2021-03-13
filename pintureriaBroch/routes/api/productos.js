var express = require('express');
var router = express.Router();
var productosApiController = require("../../controllers/api/productosController")

router.get("/", productosApiController.list);

module.exports = router;