"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Identificador extends Node_1.Node {
    constructor(identificador, line, column) {
        // tipo null porque aun no se el tipo
        super(null, line, column);
        this.identificador = identificador;
    }
    execute(tree) {
        //console.log("<li>Identificador ("+ this.identificador+")</li>");
        tree.arbol_ast.push("<li>Identificador (" + this.identificador + ")</li>");
        //return variable.value;
    }
}
exports.Identificador = Identificador;
