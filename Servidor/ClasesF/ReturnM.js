"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const NodeErr_1 = require("../Errores/NodeErr");
class ReturnM extends Node_1.Node {
    constructor(line, column) {
        super(null, line, column);
    }
    execute(tree, in_bucle, T_return, in_switch) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Return M");
        if (T_return != "RM") {
            tree.lis_err.push(new NodeErr_1.NodeErr("Sintactico", "Se Esperaba una Expresion en el Retorno", "return", this.line, this.column));
            //console.log("Error, se Esperaba una Expresion en el Retorno" + this.line + "-" + this.column);
        }
        return this;
    }
}
exports.ReturnM = ReturnM;
