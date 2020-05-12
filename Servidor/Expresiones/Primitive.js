"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Primitive extends Node_1.Node {
    constructor(type, value, line, column) {
        super(type, line, column);
        this.value = value;
    }
    /**
     * @param tree Arbol de instrucciones y excepciones
     */
    execute(tree) {
        //console.log("<li>Primitivo ("+ this.type+")</li>");
        tree.arbol_ast.push("<li>Primitivo (" + this.type + ")</li>");
        return this.value;
    }
}
exports.Primitive = Primitive;
