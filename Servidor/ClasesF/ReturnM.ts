import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";

export class ReturnM extends Node {

    constructor(line: Number, column: Number) {
        super(null, line, column);
    }

    execute(tree: Tree, in_bucle:Boolean, T_return:String, in_switch:Boolean){
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Return M");
        if(T_return != "RM"){
            console.log("Error, se Esperaba una Expresion en el Retorno" + this.line + "-" + this.column);
        }
        return this;
    }
}