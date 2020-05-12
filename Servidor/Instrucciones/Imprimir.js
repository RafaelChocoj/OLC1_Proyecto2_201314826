"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const Tipo_1 = require("../Abstracto/Tipo");
class Imprimir extends Node_1.Node {
    constructor(expresion, line, column) {
        super(new Tipo_1.Tipo(Tipo_1.types.VOID), line, column);
        this.expresion = expresion;
    }
    execute(tree) {
        //console.log("<li data-jstree='{ \"opened\" : true }'>Imprimir ");
        //console.log("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Imprimir ");
        tree.arbol_ast.push("<ul>");
        const value = this.expresion.execute(tree);
        //tree.console.push(value);
        tree.arbol_ast.push("</ul>");
        //console.log("</ul>");
        return null;
    }
}
exports.Imprimir = Imprimir;
