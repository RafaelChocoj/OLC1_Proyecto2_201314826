import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { types } from "../Abstracto/Tipo";
import { Continue } from '../ClasesF/Continue';


export class DefaultSwitch extends Node {
    ListInstruc: Array<Node>;
    //ElseList: Array<Node>;

    constructor(ListInstruc: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.ListInstruc = ListInstruc;
    }


    execute(tree: Tree, in_bucle:Boolean, T_return:String, in_switch:Boolean) {

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Default");
        tree.arbol_ast.push("<ul>");
        

            if (this.ListInstruc.length > 0 ){
                tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones");
                tree.arbol_ast.push("<ul>");
                for (let i = 0; i < this.ListInstruc.length; i++) {
                    const res = this.ListInstruc[i].execute(tree, in_bucle, T_return, true);

                    if (in_bucle == false){
                        if(res instanceof Continue){
                            console.log("Sentencia Continue fuera de un ciclo " + res.line + "-" + res.column);
                        }
                    }
                }
                tree.arbol_ast.push("</ul>");
            }
           

        tree.arbol_ast.push("</ul>");
    }

}