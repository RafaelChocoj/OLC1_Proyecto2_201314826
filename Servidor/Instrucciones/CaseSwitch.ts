import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { types } from "../Abstracto/Tipo";
import { Continue } from '../ClasesF/Continue';

import {Declaracion}  from "../Instrucciones/Declaracion";


export class CaseSwitch extends Node {
    expre: Node;
    ListInstruc: Array<Node>;
    //ElseList: Array<Node>;

    constructor(expre: Node, ListInstruc: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.expre = expre;
        this.ListInstruc = ListInstruc;
    }


    execute(tree: Tree, in_bucle:Boolean, T_return:String, in_switch:Boolean, ListAllVar:Array<Node>) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Case");
        tree.arbol_ast.push("<ul>");

            if (this.expre != null){
                tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Expresion");
                tree.arbol_ast.push("<ul>");
                let exp: Node;
                exp = this.expre.execute(tree, in_bucle, T_return, true);      
                tree.arbol_ast.push("</ul>");
            }

            if (this.ListInstruc.length > 0 ){
                tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
                tree.arbol_ast.push("<ul>");
                for (let i = 0; i < this.ListInstruc.length; i++) {

                    if(this.ListInstruc[i] instanceof Declaracion){
                        ListAllVar.push(this.ListInstruc[i]);
                    }
                    const res = this.ListInstruc[i].execute(tree, in_bucle, T_return, true, ListAllVar);
                    /*if(res instanceof Continue || res instanceof Break){
                        return res;
                    }*/
                    if (in_bucle == false){
                        if(res instanceof Continue){
                            console.log("Sentencia Continue fuera de un ciclo " + res.line + "-" + res.column);
                        }
                    }
                }
                tree.arbol_ast.push("</ul>");
            }
           

        tree.arbol_ast.push("</ul>");
    }

}