import * as gramatica from "./Gramatica/gramatica";

var entrada = "1@+2*6+#14.25 + nose ";
var resultado=parser(entrada);
console.log("res: " + resultado);

function parser(texto:string) {
    console.log("cad en: " + texto)
    try {
        return gramatica.parse(texto);
    } catch (e) {
        return "Error en compilacion de Entrada: "+ e.toString();
    }
}