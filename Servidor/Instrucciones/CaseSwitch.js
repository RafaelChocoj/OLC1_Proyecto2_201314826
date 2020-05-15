"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class CaseSwitch extends Node_1.Node {
    //ElseList: Array<Node>;
    constructor(expre, ListInstruc, line, column) {
        super(null, line, column);
        this.expre = expre;
        this.ListInstruc = ListInstruc;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Case");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Expresion");
        tree.arbol_ast.push("<ul>");
        let exp;
        exp = this.expre.execute(tree);
        tree.arbol_ast.push("</ul>");
        if (this.ListInstruc.length > 0) {
            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.ListInstruc.length; i++) {
                const res = this.ListInstruc[i].execute(tree);
                /*if(res instanceof Continue || res instanceof Break){
                    return res;
                }*/
            }
            tree.arbol_ast.push("</ul>");
        }
        tree.arbol_ast.push("</ul>");
    }
}
exports.CaseSwitch = CaseSwitch;
