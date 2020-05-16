import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { types } from "../Abstracto/Tipo";


export class DefaultSwitch extends Node {
    ListInstruc: Array<Node>;
    //ElseList: Array<Node>;

    constructor(ListInstruc: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.ListInstruc = ListInstruc;
    }


    execute(tree: Tree) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Default");
        tree.arbol_ast.push("<ul>");
        

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