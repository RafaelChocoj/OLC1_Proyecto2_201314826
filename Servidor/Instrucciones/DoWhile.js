"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
//import { Continue } from "../Expresiones/Continue";
//import { Break } from "../Expresiones/Break";
const Declaracion_1 = require("../Instrucciones/Declaracion");
class DoWhile extends Node_1.Node {
    constructor(condition, List, line, column) {
        super(null, line, column);
        this.condition = condition;
        this.List = List;
    }
    execute(tree, in_bucle, T_return, in_switch, ListAllVar) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Do While");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
        tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.List.length; i++) {
            if (this.List[i] instanceof Declaracion_1.Declaracion) {
                ListAllVar.push(this.List[i]);
            }
            const res = this.List[i].execute(tree, true, T_return, in_switch, ListAllVar);
            /*if (res instanceof Continue) {
                break;
            } else if (res instanceof Break) {
                return;
            }*/
        }
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Condicion");
        tree.arbol_ast.push("<ul>");
        let result;
        result = this.condition.execute(tree);
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</ul>");
    }
}
exports.DoWhile = DoWhile;
