import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
//import { Exception } from "../utils/Exception";
import { types } from "../Abstracto/Tipo";
//import { Continue } from "../Expresiones/Continue";
//import { Break } from "../Expresiones/Break";

export class If extends Node {
    condicion: Node;
    IfList: Array<Node>;
    ElseList: Array<Node>;

    constructor(condicion: Node, IfList: Array<Node>, ElseList: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.condicion = condicion;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }

    execute(tree: Tree) {
    }
}
