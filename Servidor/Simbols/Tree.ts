import {Node} from "../Abstracto/Node";
import { NodeErr } from "../Errores/NodeErr";


/**
 * @class Almacena el ast y ademas la lista de excepciones
 */
export class Tree {
    instructions: Array<Node>
    //excepciones: Array<Exception>
    //console: Array<String>
    lis_err: Array<NodeErr>

    arbol_ast: Array<String>

    constructor(instructions: Array<Node>) {
        this.instructions = instructions;
        //this.excepciones = new Array<Exception>();
        //this.console = new Array<String>();
        this.lis_err = new Array<NodeErr>();
        this.arbol_ast = new Array<String>();

        this.arbol_ast.push("<h1>Reporte AST</h1>");
        this.arbol_ast.push("<div id=\"html\" class=\"demo\">");
        this.arbol_ast.push("<ul>");
        this.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Raiz");
        this.arbol_ast.push("<ul>");

    }
}