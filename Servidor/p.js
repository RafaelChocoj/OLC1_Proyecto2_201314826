"use strict";
exports.__esModule = true;
var gramatica = require("./Gramatica/gramatica");
var entrada = "12345@+2*6.25+\n#14 +( nose + \"saber\")+'o7'";
var resultado = parser(entrada);
console.log("res: " + resultado);
function parser(texto) {
    console.log("cad en: " + texto)
    try {
        return gramatica.parse(texto);
    }
    catch (e) {
        return "Error en compilacion de Entrada: " + e.toString();
    }
}
