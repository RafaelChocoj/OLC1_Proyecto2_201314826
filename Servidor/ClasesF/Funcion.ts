import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

import {Declaracion}  from "../Instrucciones/Declaracion";


export class Funcion extends Node {
    type:Tipo;
    identificador: String;
    ListParametros: Array<Node>;
    ListInstruc: Array<Node>;

    ListAllVar: Array<Node>;

    constructor(type:Tipo, identificador: String, ListParametros: Array<Node>, ListInstruc: Array<Node>, line: Number, column: Number) {
        super(type, line, column);
        this.identificador = identificador;
        this.ListParametros = ListParametros;
        this.ListInstruc = ListInstruc;

        this.ListAllVar = new Array<Node>();
    }


    execute(tree: Tree) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : MAIN }'>Funcion");
        tree.arbol_ast.push("<ul>");

            tree.arbol_ast.push("<li>Tipo ("+ this.type+")</li>");

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

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.ListInstruc.length; i++) {

                if(this.ListInstruc[i] instanceof Declaracion){
                    this.ListAllVar.push(this.ListInstruc[i]);
                }
                const res = this.ListInstruc[i].execute(tree, false, "RF", false, this.ListAllVar);
                /*if(res instanceof Continue || res instanceof Break){
                    return res;
                }*/
            }
            tree.arbol_ast.push("</ul>");

        tree.arbol_ast.push("</ul>");
    }
}