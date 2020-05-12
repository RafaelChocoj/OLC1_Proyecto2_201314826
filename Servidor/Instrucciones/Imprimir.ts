import { Node } from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class Imprimir extends Node{
    expresion : Node;
    constructor(expresion: Node, line: Number, column: Number){
        super(new Tipo(types.VOID), line, column);
        this.expresion = expresion;
    }

    execute(tree: Tree): any {

        //console.log("<li data-jstree='{ \"opened\" : true }'>Imprimir ");
        //console.log("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Imprimir ");
        tree.arbol_ast.push("<ul>");
        const value = this.expresion.execute(tree);
        //tree.console.push(value);
        tree.arbol_ast.push("</ul>");
        //console.log("</ul>");
        return null;
    }
}