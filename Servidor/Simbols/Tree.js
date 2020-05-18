"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Almacena el ast y ademas la lista de excepciones
 */
class Tree {
    constructor(instructions) {
        this.instructions = instructions;
        //this.excepciones = new Array<Exception>();
        //this.console = new Array<String>();
        this.lis_err = new Array();
        this.arbol_ast = new Array();
        //this.arbol_ast.push("<h1>Reporte AST</h1>");
        this.arbol_ast.push("<div id=\"html\" class=\"demo\">");
        this.arbol_ast.push("<ul>");
        this.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Raiz");
        this.arbol_ast.push("<ul>");
    }
}
exports.Tree = Tree;
