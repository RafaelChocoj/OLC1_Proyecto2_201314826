import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";

export class Break extends Node {

    constructor(line: Number, column: Number) {
        super(null, line, column);
    }

    execute(tree: Tree){
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Break");
        return this;
    }
}