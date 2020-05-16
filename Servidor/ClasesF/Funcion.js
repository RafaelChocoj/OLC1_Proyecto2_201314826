"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class Funcion extends Node_1.Node {
    constructor(type, identificador, ListParametros, ListInstruc, line, column) {
        super(type, line, column);
        this.identificador = identificador;
        this.ListParametros = ListParametros;
        this.ListInstruc = ListInstruc;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : MAIN }'>Funcion");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li>Tipo (" + this.type + ")</li>");
        tree.arbol_ast.push("<li>Identificador (" + this.identificador + ")</li>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Parametros");
        tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.ListParametros.length; i++) {
            const res = this.ListParametros[i].execute(tree);
            /*if(res instanceof Continue || res instanceof Break){
                return res;
            }*/
        }
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
        tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.ListInstruc.length; i++) {
            const res = this.ListInstruc[i].execute(tree);
            /*if(res instanceof Continue || res instanceof Break){
                return res;
            }*/
        }
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("</ul>");
    }
}
exports.Funcion = Funcion;
