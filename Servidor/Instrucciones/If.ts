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

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>If");
        tree.arbol_ast.push("<ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Condicion");
            tree.arbol_ast.push("<ul>");
            let condi: Node;
            condi = this.condicion.execute(tree);
            tree.arbol_ast.push("</ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista IF Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.IfList.length; i++) {
                const res = this.IfList[i].execute(tree);
                /*if(res instanceof Continue || res instanceof Break){
                    return res;
                }*/
            }
            tree.arbol_ast.push("</ul>");

            if (this.ElseList.length > 0 ){
                tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista ELSE Instrucciones");
                tree.arbol_ast.push("<ul>");
                for (let i = 0; i < this.ElseList.length; i++) {
                    const res = this.ElseList[i].execute(tree);
                    /*if(res instanceof Continue || res instanceof Break){
                        return res;
                    }*/
                }
                tree.arbol_ast.push("</ul>");
            }

        tree.arbol_ast.push("</ul>");
    }
}
