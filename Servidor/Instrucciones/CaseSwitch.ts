import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { types } from "../Abstracto/Tipo";


export class CaseSwitch extends Node {
    expre: Node;
    ListInstruc: Array<Node>;
    //ElseList: Array<Node>;

    constructor(expre: Node, ListInstruc: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.expre = expre;
        this.ListInstruc = ListInstruc;
    }


    execute(tree: Tree) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Case");
        tree.arbol_ast.push("<ul>");

            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Expresion");
            tree.arbol_ast.push("<ul>");
            let exp: Node;
            exp = this.expre.execute(tree);
            tree.arbol_ast.push("</ul>");

            if (this.ListInstruc.length > 0 ){
                tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
                tree.arbol_ast.push("<ul>");
                for (let i = 0; i < this.ListInstruc.length; i++) {
                    const res = this.ListInstruc[i].execute(tree);
                    /*if(res instanceof Continue || res instanceof Break){
                        return res;
                    }*/
                }
                tree.arbol_ast.push("</ul>");
            }
           

        tree.arbol_ast.push("</ul>");
    }

}