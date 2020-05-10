"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Almacena el ast y ademas la lista de excepciones
 */
class Tree {
    constructor(instructions) {
        this.instructions = instructions;
        //this.excepciones = new Array<Exception>();
        this.console = new Array();
    }
}
exports.Tree = Tree;
