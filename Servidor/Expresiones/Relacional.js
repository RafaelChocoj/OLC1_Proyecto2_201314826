"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const Tipo_1 = require("../Abstracto/Tipo");
class Relacional extends Node_1.Node {
    constructor(iz_Operator, der_Operator, Operator, line, column) {
        super(new Tipo_1.Tipo(Tipo_1.types.boolean), line, column);
        this.iz_Operator = iz_Operator;
        this.der_Operator = der_Operator;
        this.Operator = Operator;
    }
    execute(tree) {
        //console.log("<li data-jstree='{ \"opened\" : true }'>Aritmetica");
        //console.log("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Relacional " + this.Operator);
        tree.arbol_ast.push("<ul>");
        const result = this.iz_Operator.execute(tree);
        const result2 = this.der_Operator.execute(tree);
        //console.log("</ul>");
        tree.arbol_ast.push("</ul>");
        // return 25;
    }
}
exports.Relacional = Relacional;
