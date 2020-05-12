import {Node} from "../Abstracto/Node";


/**
 * @class Almacena el ast y ademas la lista de excepciones
 */
export class Tree {
    instructions: Array<Node>
    //excepciones: Array<Exception>
    console: Array<String>

    arbol_ast: Array<String>

    constructor(instructions: Array<Node>) {
        this.instructions = instructions;
        //this.excepciones = new Array<Exception>();
        this.console = new Array<String>();
        this.arbol_ast = new Array<String>();
    }
}