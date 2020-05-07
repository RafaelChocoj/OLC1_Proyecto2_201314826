"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/AnalizFile/', function (req, res) {
    var entrada = req.body.text;
    console.log(entrada);
    //var resultado=parser(entrada);
    //Errores.clear();
    //res.send(resultado.toString());
    res.send("recibo y enviado");
});
var server = app.listen(8080, function () {
    console.log('Servidor escuchando en puerto 8080...');
});
/*function parser(texto:string) {
    try {
        return gramatica.parse(texto);
    } catch (e) {
        return "Error en compilacion de Entrada: "+ e.toString();
    }
}*/
