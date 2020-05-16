import { Node } from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class ParametroCall extends Node {
    expre: Node;

    constructor(expre: Node, line: Number, column: Number) {
        super(null, line, column);
        this.expre = expre;
    }

    execute( tree: Tree) {

        /*parametros de llamar funcion*/
        const result = this.expre.execute(tree);

    }
}