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
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>If");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Condicion");
        tree.arbol_ast.push("<ul>");
        let condi;
        condi = this.condicion.execute(tree);
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista IF Instrucciones");
        tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.IfList.length; i++) {
            const res = this.IfList[i].execute(tree);
            /*if(res instanceof Continue || res instanceof Break){
                return res;
            }*/
        }
        tree.arbol_ast.push("</ul>");
        if (this.ElseList.length > 0) {
            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista ELSE Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.ElseList.length; i++) {
                const res = this.ElseList[i].execute(tree);
                /*if(res instanceof Continue || res instanceof Break){
                    return res;
                }*/
            }
            tree.arbol_ast.push("</ul>");
        }
        tree.arbol_ast.push("</ul>");
    }
}
exports.If = If;
