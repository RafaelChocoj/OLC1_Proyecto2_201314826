"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const Continue_1 = require("../ClasesF/Continue");
const Declaracion_1 = require("../Instrucciones/Declaracion");
class CaseSwitch extends Node_1.Node {
    //ElseList: Array<Node>;
    constructor(expre, ListInstruc, line, column) {
        super(null, line, column);
        this.expre = expre;
        this.ListInstruc = ListInstruc;
    }
    execute(tree, in_bucle, T_return, in_switch, ListAllVar) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Case");
        tree.arbol_ast.push("<ul>");
        if (this.expre != null) {
            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Expresion");
            tree.arbol_ast.push("<ul>");
            let exp;
            exp = this.expre.execute(tree, in_bucle, T_return, true);
            tree.arbol_ast.push("</ul>");
        }
        if (this.ListInstruc.length > 0) {
            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.ListInstruc.length; i++) {
                if (this.ListInstruc[i] instanceof Declaracion_1.Declaracion) {
                    ListAllVar.push(this.ListInstruc[i]);
                }
                const res = this.ListInstruc[i].execute(tree, in_bucle, T_return, true, ListAllVar);
                /*if(res instanceof Continue || res instanceof Break){
                    return res;
                }*/
                if (in_bucle == false) {
                    if (res instanceof Continue_1.Continue) {
                        console.log("Sentencia Continue fuera de un ciclo " + res.line + "-" + res.column);
                    }
                }
            }
            tree.arbol_ast.push("</ul>");
        }
        tree.arbol_ast.push("</ul>");
    }
}
exports.CaseSwitch = CaseSwitch;
