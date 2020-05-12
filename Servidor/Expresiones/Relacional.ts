import {Node} from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class Relacional extends Node {
    iz_Operator: Node;
    der_Operator: Node;
    Operator: String;

    constructor(iz_Operator: Node, der_Operator: Node, Operator: String, line: Number, column: Number) {
        super(new Tipo(types.boolean), line,column);
        this.iz_Operator = iz_Operator;
        this.der_Operator = der_Operator;
        this.Operator = Operator;

    }

    execute(tree: Tree) {

       //console.log("<li data-jstree='{ \"opened\" : true }'>Aritmetica");
       //console.log("<ul>");
       tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Relacional");
       tree.arbol_ast.push("<ul>");
       const result = this.iz_Operator.execute(tree);
       const result2 = this.der_Operator.execute(tree);
       //console.log("</ul>");
       tree.arbol_ast.push("</ul>");

      // return 25;
    }


}