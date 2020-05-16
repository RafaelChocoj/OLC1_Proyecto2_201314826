"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Parametros extends Node_1.Node {
    constructor(type, identificador, line, column) {
        //constructor(type: Tipo, identificador: Array<String>, value: Node, line: Number, column: Number) {
        super(type, line, column);
        this.identificador = identificador;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Tipo (" + this.type + ") - " + "Identificador (" + this.identificador + ")");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("</ul>");
        /*tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Tipo (" + this.type + ")");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("</ul>");

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Identificador (" + this.identificador + ")");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("</ul>");*/
    }
}
exports.Parametros = Parametros;
