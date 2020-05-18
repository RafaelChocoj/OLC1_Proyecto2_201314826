"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const Tipo_1 = require("../Abstracto/Tipo");
class LogicaNot extends Node_1.Node {
    constructor(expre, Operator, line, column) {
        super(new Tipo_1.Tipo(Tipo_1.types.boolean), line, column);
        this.expre = expre;
        this.Operator = Operator;
    }
    execute(tree) {
        //console.log("<li data-jstree='{ \"opened\" : true }'>Aritmetica");
        //console.log("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Logica " + this.Operator);
        tree.arbol_ast.push("<ul>");
        const result = this.expre.execute(tree);
        //console.log("</ul>");
        tree.arbol_ast.push("</ul>");
        // return 25;
    }
}
exports.LogicaNot = LogicaNot;
