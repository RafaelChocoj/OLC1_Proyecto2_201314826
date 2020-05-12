import {Node} from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class Identificador extends Node {
    identificador: String;


    constructor(identificador: String, line: Number, column: Number) {
        // tipo null porque aun no se el tipo
        super(null, line, column);
        this.identificador = identificador;
    }

    execute(tree: Tree) {

        //console.log("<li>Identificador ("+ this.identificador+")</li>");
        tree.arbol_ast.push("<li>Identificador ("+ this.identificador+")</li>");

        //return variable.value;
    }
}