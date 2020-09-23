const express = require("express");
const app = express();

app.listen(4020, (req, res) => console.log("Servidor andando con express"));

app.get("/", (req, res) => res.send("Home de Pinturerias Broch!"));

