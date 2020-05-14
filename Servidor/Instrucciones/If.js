"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
//import { Continue } from "../Expresiones/Continue";
//import { Break } from "../Expresiones/Break";
class If extends Node_1.Node {
    constructor(condicion, IfList, ElseList, line, column) {
        super(null, line, column);
        this.condicion = condicion;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }
    execute(tree) {
    }
}
exports.If = If;
