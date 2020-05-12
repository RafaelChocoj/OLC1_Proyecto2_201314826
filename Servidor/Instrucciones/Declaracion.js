"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Declaracion extends Node_1.Node {
    //constructor(type: Tipo, identificador: String, value: Node, line: Number, column: Number) {
    constructor(type, identificador, value, line, column) {
        super(type, line, column);
        this.identificador = identificador;
        this.value = value;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Declaracion");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Tipo (" + this.type + ")");
        for (let i = 0; i < this.identificador.length; i++) {
            tree.arbol_ast.push("<li>" + this.identificador[i] + "</li>");
            //console.log(this.identificador[i]);
        }
        if (this.value != null) {
            const result = this.value.execute(tree);
        }
        tree.arbol_ast.push("</ul>");
    }
}
exports.Declaracion = Declaracion;
