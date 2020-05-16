import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class LlamadaF extends Node {
    identificador: String;
    ListParametros: Array<Node>;

    constructor(identificador: String, ListParametros: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.identificador = identificador;
        this.ListParametros = ListParametros;
        
    }

    execute(tree: Tree) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Call Metodo-Funcion");
        tree.arbol_ast.push("<ul>");
            tree.arbol_ast.push("<li>Identificador ("+ this.identificador+")</li>");

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