import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { types } from "../Abstracto/Tipo";
//import { Continue } from "../Expresiones/Continue";
//import { Break } from "../Expresiones/Break";


export class DoWhile extends Node {
    condition: Node;
    List: Array<Node>;

    constructor(condition: Node, List:Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.condition = condition;
        this.List = List;
    }

    execute(tree: Tree,  in_bucle:Boolean, T_return:String, in_switch:Boolean) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Do While");
        tree.arbol_ast.push("<ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.List.length; i++) {
                const res = this.List[i].execute(tree, true, T_return, in_switch);
                /*if (res instanceof Continue) {
                    break;
                } else if (res instanceof Break) {
                    return;
                }*/
            }
            tree.arbol_ast.push("</ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Condicion");
            tree.arbol_ast.push("<ul>");
            let result: Node;
            result = this.condition.execute(tree);
            tree.arbol_ast.push("</ul>");

        tree.arbol_ast.push("</ul>");
    }


}
