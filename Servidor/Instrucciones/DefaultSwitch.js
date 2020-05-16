"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class DefaultSwitch extends Node_1.Node {
    //ElseList: Array<Node>;
    constructor(ListInstruc, line, column) {
        super(null, line, column);
        this.ListInstruc = ListInstruc;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Default");
        tree.arbol_ast.push("<ul>");
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
exports.DefaultSwitch = DefaultSwitch;
