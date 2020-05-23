"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const Declaracion_1 = require("../Instrucciones/Declaracion");
class VoidMain extends Node_1.Node {
    constructor(ListInstruc, line, column) {
        super(null, line, column);
        this.ListInstruc = ListInstruc;
        this.ListAllVar = new Array();
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : MAIN }'>void main");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
        tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.ListInstruc.length; i++) {
            if (this.ListInstruc[i] instanceof Declaracion_1.Declaracion) {
                this.ListAllVar.push(this.ListInstruc[i]);
            }
            const res = this.ListInstruc[i].execute(tree, false, "RM", false, this.ListAllVar);
            /*if(res instanceof Continue || res instanceof Break){
                return res;
            }*/
        }
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</ul>");
    }
}
exports.VoidMain = VoidMain;
