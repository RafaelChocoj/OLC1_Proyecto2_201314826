"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
class LlamadaF extends Node_1.Node {
    constructor(identificador, ListParametros, line, column) {
        super(null, line, column);
        this.identificador = identificador;
        this.ListParametros = ListParametros;
    }
    execute(tree) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Call Metodo-Funcion");
        tree.arbol_ast.push("<ul>");
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
        tree.arbol_ast.push("</ul>");
    }
}
exports.LlamadaF = LlamadaF;
