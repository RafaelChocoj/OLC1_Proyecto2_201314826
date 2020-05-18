"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Continue extends Node_1.Node {
    constructor(line, column) {
        super(null, line, column);
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Continue");
        return this;
    }
}
exports.Continue = Continue;
