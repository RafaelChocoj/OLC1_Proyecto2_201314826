"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class ReturnM extends Node_1.Node {
    constructor(line, column) {
        super(null, line, column);
    }
    execute(tree, in_bucle, T_return, in_switch) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Return M");
        if (T_return != "RM") {
            console.log("Error, se Esperaba una Expresion en el Retorno" + this.line + "-" + this.column);
        }
        return this;
    }
}
exports.ReturnM = ReturnM;
