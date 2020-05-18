"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const NodeErr_1 = require("../Errores/NodeErr");
class ReturnF extends Node_1.Node {
    constructor(expresion, line, column) {
        super(null, line, column);
        this.expresion = expresion;
    }
    execute(tree, in_bucle, T_return, in_switch) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Return FUN");
        tree.arbol_ast.push("<ul>");
        if (T_return != "RF") {
            tree.lis_err.push(new NodeErr_1.NodeErr("Sintactico", "No se Esperaba una Expresion en el retorno", "return", this.line, this.column));
            //console.log("Error, No se Esperaba una Expresion en el retorno" + this.line + "-" + this.column);
        }
        const result = this.expresion.execute(tree);
        tree.arbol_ast.push("</ul>");
        return this;
    }
}
exports.ReturnF = ReturnF;
