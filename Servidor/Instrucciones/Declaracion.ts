import { Node } from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class Declaracion extends Node {
    type: Tipo;
    //identificador: String;
    identificador: Array<String>
    value: Node;

    //constructor(type: Tipo, identificador: String, value: Node, line: Number, column: Number) {
    constructor(type: Tipo, identificador: Array<String>, value: Node, line: Number, column: Number) {
        super(type, line, column);
        this.identificador = identificador;
        this.value = value;
    }

    execute( tree: Tree) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Declaracion");
        tree.arbol_ast.push("<ul>");

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Tipo ("+ this.type+")");
            for (let i:Number = 0; i < this.identificador.length; i++)
            {
                tree.arbol_ast.push("<li>identificador ("+this.identificador[i] +")</li>");
                //console.log(this.identificador[i]);
            }
            if (this.value != null) {
                const result = this.value.execute(tree);
            }
        tree.arbol_ast.push("</ul>");
    }
}