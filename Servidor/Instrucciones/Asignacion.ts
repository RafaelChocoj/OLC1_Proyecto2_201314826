import { Node } from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";

export class Asignacion extends Node {
    identificador: String;
    value: Node;
    ast_s:String;

    constructor(identificador: String, value: Node, line: Number, column: Number) {
        super(null, line, column);
        this.identificador = identificador;
        this.value = value;
        this.ast_s = "";
        
    }

    execute(tree: Tree) {
        
        //console.log("<li data-jstree='{ \"opened\" : true }'>Asignacion " + this.identificador);
        //console.log("<ul>");
        
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Asignacion");
        tree.arbol_ast.push("<ul>");

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>identificador ("+ this.identificador+")");
        const result = this.value.execute(tree);
        /*if (result != null) {
            return result;
        }*/
        tree.arbol_ast.push("</ul>");
        //console.log("</ul>");
    }
}