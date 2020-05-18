import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";
import { NodeErr } from "../Errores/NodeErr";

export class ReturnF extends Node {

    expresion: Node;
    constructor(expresion: Node, line: Number, column:Number) {
        super(null, line, column);
        this.expresion = expresion;
    }

    execute(tree: Tree, in_bucle:Boolean, T_return:String, in_switch:Boolean){
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Return FUN");
        tree.arbol_ast.push("<ul>");
            if(T_return != "RF"){
                tree.lis_err.push(new NodeErr("Sintactico","No se Esperaba una Expresion en el retorno", "return", this.line, this.column) );
                //console.log("Error, No se Esperaba una Expresion en el retorno" + this.line + "-" + this.column);
            }
            const result = this.expresion.execute(tree);
        tree.arbol_ast.push("</ul>");
        return this;
    }
}