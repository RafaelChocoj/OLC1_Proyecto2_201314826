import {Node} from "../Abstracto/Node";
import {Tree} from "../Simbols/Tree";
import {types, Tipo } from "../Abstracto/Tipo";

export class Aritmetica extends Node {
    iz_Operator: Node;
    der_Operator: Node;
    Operator: String;

    arit:String;    

    constructor(iz_Operator: Node, der_Operator: Node, Operator: String, line: Number, column: Number) {
        super(null, line,column);
        this.iz_Operator = iz_Operator;
        this.der_Operator = der_Operator;
        this.Operator = Operator;
        this.arit = "";
    }

    execute(tree: Tree) {

        //var izq1 = (this.iz_Operator==null)?null:this.iz_Operator.execute(tree);
        //var der1 = (this.der_Operator==null)?null:this.der_Operator.execute(tree);
        /*opernado aritmenticos
        *creando carpetas para el ast
        */
       //const v_izq = this.iz_Operator.execute(tree);
       //const v_der = this.der_Operator.execute(tree);

       //console.log("ar: " + v_izq + this.Operator + v_der);


       //console.log("<li data-jstree='{ \"opened\" : true }'>Aritmetica");
       //console.log("<ul>");
       tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Aritmetica");
       tree.arbol_ast.push("<ul>");
       const result = this.iz_Operator.execute(tree);
       const result2 = this.der_Operator.execute(tree);
       //console.log("</ul>");
       tree.arbol_ast.push("</ul>");


       //console.log(this.arit);
      // return 25;
    }

}