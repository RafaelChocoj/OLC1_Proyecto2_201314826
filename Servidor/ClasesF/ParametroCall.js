"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class ParametroCall extends Node_1.Node {
    constructor(expre, line, column) {
        super(null, line, column);
        this.expre = expre;
    }
    execute(tree) {
        /*parametros de llamar funcion*/
        const result = this.expre.execute(tree);
    }
}
exports.ParametroCall = ParametroCall;
