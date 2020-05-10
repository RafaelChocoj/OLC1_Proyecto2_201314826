import {Node} from "../Abstracto/Node";
import {Tipo} from "../Abstracto/Tipo";
import {Tree} from "../Simbols/Tree";

export class Arithmetica extends Node {
    iz_Operator: Node;
    der_Operator: Node;
    Operator: String;

    constructor(iz_Operator: Node, der_Operator: Node, Operator: String, line: Number, column: Number) {        super(null, line, column);
        this.iz_Operator = iz_Operator;
        this.der_Operator = der_Operator;
        this.Operator = Operator;
    }

    execute(tree: Tree) {

        /*opernado aritmenticos
        *creando carpetas para el ast
        */
    }

}