import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { types } from "../Abstracto/Tipo";
import {Declaracion}  from "../Instrucciones/Declaracion";



export class Switch extends Node {
    expresion: Node;
    CasesList: Array<Node>;
    defaulList: Array<Node>;

    constructor(expresion: Node, CasesList: Array<Node>, defaulList: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.expresion = expresion;
        this.CasesList = CasesList;
        this.defaulList = defaulList;
    }


    execute(tree: Tree, in_bucle:Boolean, T_return:String, in_switch:Boolean, ListAllVar:Array<Node>) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Switch");
        tree.arbol_ast.push("<ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Expresion");
            tree.arbol_ast.push("<ul>");
            let exp: Node;
            exp = this.expresion.execute(tree, in_bucle, T_return, in_switch);
            tree.arbol_ast.push("</ul>");

            //if (this.CasesList.length > 0 ){
                //tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>CASE");
                //tree.arbol_ast.push("<ul>");
                for (let i = 0; i < this.CasesList.length; i++) {

                    if(this.CasesList[i] instanceof Declaracion){
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
                    if(this.defaulList[i] instanceof Declaracion){
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