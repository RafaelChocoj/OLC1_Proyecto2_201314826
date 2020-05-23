import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { types } from "../Abstracto/Tipo";

import {Declaracion}  from "../Instrucciones/Declaracion";

export class VoidMain extends Node {
    ListInstruc: Array<Node>;

    ListAllVar: Array<Node>;

    constructor(ListInstruc: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.ListInstruc = ListInstruc;

        this.ListAllVar = new Array<Node>();
    }


    execute(tree: Tree) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : MAIN }'>void main");
        tree.arbol_ast.push("<ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.ListInstruc.length; i++) {

                if(this.ListInstruc[i] instanceof Declaracion){
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