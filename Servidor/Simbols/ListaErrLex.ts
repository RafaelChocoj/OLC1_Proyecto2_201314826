import { NodeErr } from "../Errores/NodeErr";


export class ListaErrLex {
    err_lex: Array<NodeErr>

    constructor() {
        this.err_lex = new Array<NodeErr>();
    }
}