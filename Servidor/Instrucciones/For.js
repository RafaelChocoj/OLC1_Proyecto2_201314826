"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
//import { Continue } from "../Expresiones/Continue";
//import { Break } from "../Expresiones/Break";
class For extends Node_1.Node {
    constructor(inicial, condition, incredecre, List, line, column) {
        super(null, line, column);
        this.inicial = inicial;
        this.condition = condition;
        this.incredecre = incredecre;
        this.List = List;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>For");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Inicial");
        tree.arbol_ast.push("<ul>");
        let inic;
        inic = this.inicial.execute(tree);
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Condicion");
        tree.arbol_ast.push("<ul>");
        let result;
        result = this.condition.execute(tree);
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Incremento-Decremento");
        tree.arbol_ast.push("<ul>");
        let incre;
        incre = this.incredecre.execute(tree);
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
        tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.List.length; i++) {
            const res = this.List[i].execute(tree);
            /*if (res instanceof Continue) {
                break;
            } else if (res instanceof Break) {
                return;
            }*/
        }
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</ul>");
    }
}
exports.For = For;