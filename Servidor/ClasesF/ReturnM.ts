import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { NodeErr } from "../Errores/NodeErr";

export class ReturnM extends Node {

    constructor(line: Number, column: Number) {
        super(null, line, column);
    }

    execute(tree: Tree, in_bucle:Boolean, T_return:String, in_switch:Boolean){
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Return M");
        if(T_return != "RM"){
            tree.lis_err.push(new NodeErr("Sintactico","Se Esperaba una Expresion en el Retorno", "return", this.line, this.column) );
            console.log("Error, se Esperaba una Expresion en el Retorno" + this.line + "-" + this.column);
        }
        return this;
    }
}