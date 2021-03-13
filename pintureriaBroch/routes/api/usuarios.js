var express = require('express');
var router = express.Router();
var usuariosApiController = require("../../controllers/api/usuariosController")

router.get("/", usuariosApiController.list);

module.exports = router;