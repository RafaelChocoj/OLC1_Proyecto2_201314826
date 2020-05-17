import { Node } from "../Abstracto/Node"
import { Tree } from "../Simbols/Tree";

export class Clase extends Node {

    Imports: Array<String>;
    identificador: String;
    Instruc_Clase: Array<Node>;

    constructor(Imports: Array<String>, identificador: String, Instruc_Clase: Array<Node>, line: Number, column: Number) {
        super(null, line, column);
        this.Imports = Imports;
        this.identificador = identificador;
        this.Instruc_Clase = Instruc_Clase;    
    }

    execute(tree: Tree) {

        if (this.Imports.length > 0 ){
            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Imports");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.Imports.length; i++) {
                tree.arbol_ast.push("<li>Identificador ("+ this.Imports[i]+")</li>");
            }
            tree.arbol_ast.push("</ul>");
        }

        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Clase");
        tree.arbol_ast.push("<ul>");
            tree.arbol_ast.push("<li>Identificador ("+ this.identificador+")</li>");
        
            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista Instrucciones Clase");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.Instruc_Clase.length; i++) {
                const res = this.Instruc_Clase[i].execute(tree);
            }
            tree.arbol_ast.push("</ul>");
        
        tree.arbol_ast.push("</ul>");
    }
}