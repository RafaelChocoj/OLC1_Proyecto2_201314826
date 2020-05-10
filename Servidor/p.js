"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gramatica = require("./Gramatica/gramatica");
//var entrada = "-12345@+2*6.25+\n#14 -( nose + \"saber\")+'o7'";
//var entrada = "2^2+5%3*12345@+2*6.25+\n#14 -( nose + \"saber\")+'o'";
var entrada = "5+2*7-(5/3)";
//var entrada = "((5>2) && (num1 == 58)) ";
//var entrada = "!true@";
var resultado = parser(entrada);
console.log("res: " + resultado);
function parser(texto) {
    console.log("cad en: " + texto);
    try {
        return gramatica.parse(texto);
    }
    catch (e) {
        return "Error en compilacion de Entrada: " + e.toString();
    }
}
