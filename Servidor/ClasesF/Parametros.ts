import { Node } from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class Parametros extends Node {
    type: Tipo;
    identificador: String;

    constructor(type: Tipo, identificador: String, line: Number, column: Number) {
    //constructor(type: Tipo, identificador: Array<String>, value: Node, line: Number, column: Number) {
        super(type, line, column);
        this.identificador = identificador;
    }

    execute( tree: Tree) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Tipo (" + this.type + ") - " + "Identificador (" + this.identificador + ")");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("</ul>");

        /*tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Tipo (" + this.type + ")");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("</ul>");

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Identificador (" + this.identificador + ")");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("</ul>");*/

    }
}