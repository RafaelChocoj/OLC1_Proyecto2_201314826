import {Node} from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class LogicaNot extends Node {
    expre: Node;
    Operator: String;

    constructor(expre: Node, Operator: String, line: Number, column: Number) {
        super(new Tipo(types.boolean), line,column);
        this.expre = expre;
        this.Operator = Operator;

    }

    execute(tree: Tree) {

       //console.log("<li data-jstree='{ \"opened\" : true }'>Aritmetica");
       //console.log("<ul>");
       tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Logica " + this.Operator);
       tree.arbol_ast.push("<ul>");
       const result = this.expre.execute(tree);
       //console.log("</ul>");
       tree.arbol_ast.push("</ul>");

      // return 25;
    }


}