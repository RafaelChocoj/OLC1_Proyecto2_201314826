"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Asignacion extends Node_1.Node {
    constructor(identificador, value, line, column) {
        super(null, line, column);
        this.identificador = identificador;
        this.value = value;
        this.ast_s = "";
    }
    execute(tree) {
        //console.log("<li data-jstree='{ \"opened\" : true }'>Asignacion " + this.identificador);
        //console.log("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Asignacion");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>identificador (" + this.identificador + ")");
        const result = this.value.execute(tree);
        /*if (result != null) {
            return result;
        }*/
        tree.arbol_ast.push("</ul>");
        //console.log("</ul>");
    }
}
exports.Asignacion = Asignacion;
