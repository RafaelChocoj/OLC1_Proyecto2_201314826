import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { NodeErr } from "../Errores/NodeErr";
import { types } from "../Abstracto/Tipo";

import { Break } from '../ClasesF/Break';
import { Continue } from '../ClasesF/Continue';
import {Declaracion}  from "../Instrucciones/Declaracion";

export class If extends Node {
    condicion: Node;
    IfList: Array<Node>;
    ElseList: Array<Node>;

    constructor(condicion: Node, IfList: Array<Node>, ElseList: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.condicion = condicion;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }

    execute(tree: Tree, in_bucle:Boolean, T_return:String, in_switch:Boolean, ListAllVar:Array<Node>) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>If");
        tree.arbol_ast.push("<ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Condicion");
            tree.arbol_ast.push("<ul>");
            let condi: Node;
            condi = this.condicion.execute(tree);
            tree.arbol_ast.push("</ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista IF Instrucciones");
            tree.arbol_ast.push("<ul>");

            for (let i = 0; i < this.IfList.length; i++) {
                if(this.IfList[i] instanceof Declaracion){
                    ListAllVar.push(this.IfList[i]);
                }
                const res = this.IfList[i].execute(tree, in_bucle, T_return, in_switch, ListAllVar);
                //console.log("res " + res);
                //console.log("is bre " + (this.IfList[i] instanceof Break));

                if (in_bucle == false){
                    if(res instanceof Continue){
                        tree.lis_err.push(new NodeErr("Sintactico","Sentencia Continue fuera de un ciclo", "Continue", res.line, res.column) );
                        console.log("Sentencia Continue fuera de un ciclo " + res.line + "-" + res.column);
                    }
                }
                //console.log("in_switch: " + in_switch + ", in_bucle: " + in_bucle);
                if (in_switch == false && in_bucle == false){
                    if(res instanceof Break){
                        tree.lis_err.push(new NodeErr("Sintactico","Sentencia Break fuera de un ciclo ", "Break", res.line, res.column) );
                        console.log("Sentencia break fuera de un ciclo " + res.line + "-" + res.column);
                    }
                }
                
            }
            tree.arbol_ast.push("</ul>");

            if (this.ElseList.length > 0 ){
                tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista ELSE Instrucciones");
                tree.arbol_ast.push("<ul>");
                for (let i = 0; i < this.ElseList.length; i++) {

                    if(this.ElseList[i] instanceof Declaracion){
                        ListAllVar.push(this.ElseList[i]);
                    }
                    const res = this.ElseList[i].execute(tree, in_bucle, T_return, in_switch, ListAllVar);
                    
                    if (in_bucle == false){
                        if(res instanceof Continue){
                            tree.lis_err.push(new NodeErr("Sintactico","Sentencia Continue fuera de un ciclo", "Continue", res.line, res.column) );
                            console.log("Sentencia Continue fuera de un ciclo " + res.line + "-" + res.column);
                        }
                    }
                    //console.log("in_switch: " + in_switch + ", in_bucle: " + in_bucle);
                    if (in_switch == false && in_bucle == false){
                        if(res instanceof Break){
                            tree.lis_err.push(new NodeErr("Sintactico","Sentencia break fuera de un ciclo ", "Break", res.line, res.column) );
                            console.log("Sentencia break fuera de un ciclo " + res.line + "-" + res.column);
                        }
                    }
                }
                tree.arbol_ast.push("</ul>");
            }

        tree.arbol_ast.push("</ul>");
    }
}
