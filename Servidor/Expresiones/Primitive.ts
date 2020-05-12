import {Node} from "../Abstracto/Node";
import {Tipo} from "../Abstracto/Tipo";
import {Tree} from "../Simbols/Tree";

export class Primitive extends Node{
    value: Object;

    constructor(type:Tipo, value: Object, line: Number, column: Number){
        super(type, line, column);
        this.value = value;
    }

    /**
     * @param tree Arbol de instrucciones y excepciones
     */
    execute(tree: Tree) {
        //console.log("<li>Primitivo ("+ this.type+")</li>");
        tree.arbol_ast.push("<li>Primitivo ("+ this.type+")</li>");
        return this.value;
    }
}