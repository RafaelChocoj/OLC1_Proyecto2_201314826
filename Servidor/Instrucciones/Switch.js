"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const Declaracion_1 = require("../Instrucciones/Declaracion");
class Switch extends Node_1.Node {
    constructor(expresion, CasesList, defaulList, line, column) {
        super(null, line, column);
        this.expresion = expresion;
        this.CasesList = CasesList;
        this.defaulList = defaulList;
    }
    execute(tree, in_bucle, T_return, in_switch, ListAllVar) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Switch");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Expresion");
        tree.arbol_ast.push("<ul>");
        let exp;
        exp = this.expresion.execute(tree, in_bucle, T_return, in_switch);
        tree.arbol_ast.push("</ul>");
        //if (this.CasesList.length > 0 ){
        //tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>CASE");
        //tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.CasesList.length; i++) {
            if (this.CasesList[i] instanceof Declaracion_1.Declaracion) {
                ListAllVar.push(this.CasesList[i]);
            }
            const res = this.CasesList[i].execute(tree, in_bucle, T_return, true, ListAllVar);
            /*if(res instanceof Continue || res instanceof Break){
               return res;
           }*/
        }
        //tree.arbol_ast.push("</ul>");
        //}
        //if (this.defaulList.length > 0 ){
        //    tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Default");
        //    tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.defaulList.length; i++) {
            if (this.defaulList[i] instanceof Declaracion_1.Declaracion) {
                ListAllVar.push(this.defaulList[i]);
            }
            const res = this.defaulList[i].execute(tree, in_bucle, T_return, true, ListAllVar);
            /*if(res instanceof Continue || res instanceof Break){
               return res;
           }*/
        }
        //   tree.arbol_ast.push("</ul>");
        //}
        tree.arbol_ast.push("</ul>");
    }
}
exports.Switch = Switch;
