"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Arithmetica extends Node_1.Node {
    constructor(iz_Operator, der_Operator, Operator, line, column) {
        super(null, line, column);
        this.iz_Operator = iz_Operator;
        this.der_Operator = der_Operator;
        this.Operator = Operator;
    }
    execute(tree) {
        /*opernado aritmenticos
        *creando carpetas para el ast
        */
    }
}
exports.Arithmetica = Arithmetica;
