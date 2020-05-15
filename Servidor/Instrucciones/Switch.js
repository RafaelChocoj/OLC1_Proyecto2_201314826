"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Switch extends Node_1.Node {
    //ElseList: Array<Node>;
    constructor(expresion, CasesList, line, column) {
        super(null, line, column);
        this.expresion = expresion;
        this.CasesList = CasesList;
        //this.ElseList = ElseList;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Switch");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Expresion");
        tree.arbol_ast.push("<ul>");
        let exp;
        exp = this.expresion.execute(tree);
        tree.arbol_ast.push("</ul>");
        //if (this.CasesList.length > 0 ){
        //tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>CASE");
        //tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.CasesList.length; i++) {
            const res = this.CasesList[i].execute(tree);
            /*if(res instanceof Continue || res instanceof Break){
               return res;
           }*/
        }
        //tree.arbol_ast.push("</ul>");
        //}
        tree.arbol_ast.push("</ul>");
    }
}
exports.Switch = Switch;
