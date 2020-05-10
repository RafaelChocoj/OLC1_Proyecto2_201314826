import {Tree} from "../Simbols/Tree";
import {Tipo} from "./Tipo";

export abstract class Node {

    line: Number;
    column: Number;
    type: Tipo;

    /**
     * @abstract Metodo que sirver para ejecutar una instruccion o expresion
     * si fuera instruccion devuelve nulo y si fuera expresion devuelve un valor
     */
    abstract execute(/*table: Table,*/ tree: Tree): any;

    constructor(type: Tipo, line: Number, column: Number) {
        this.type = type;
        this.line = line;
        this.column = column;
    }

}