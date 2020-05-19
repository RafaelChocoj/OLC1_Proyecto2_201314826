"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("../Abstracto/Node");
const NodeErr_1 = require("../Errores/NodeErr");
const Break_1 = require("../ClasesF/Break");
const Continue_1 = require("../ClasesF/Continue");
class If extends Node_1.Node {
    constructor(condicion, IfList, ElseList, line, column) {
        super(null, line, column);
        this.condicion = condicion;
        this.IfList = IfList;
        this.ElseList = ElseList;
    }
    execute(tree, in_bucle, T_return, in_switch) {
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>If");
        tree.arbol_ast.push("<ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Condicion");
        tree.arbol_ast.push("<ul>");
        let condi;
        condi = this.condicion.execute(tree);
        tree.arbol_ast.push("</ul>");
        tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista IF Instrucciones");
        tree.arbol_ast.push("<ul>");
        for (let i = 0; i < this.IfList.length; i++) {
            const res = this.IfList[i].execute(tree, in_bucle, T_return, in_switch);
            //console.log("res " + res);
            //console.log("is bre " + (this.IfList[i] instanceof Break));
            if (in_bucle == false) {
                if (res instanceof Continue_1.Continue) {
                    tree.lis_err.push(new NodeErr_1.NodeErr("Sintactico", "Sentencia Continue fuera de un ciclo", "Continue", res.line, res.column));
                    console.log("Sentencia Continue fuera de un ciclo " + res.line + "-" + res.column);
                }
            }
            console.log("in_switch: " + in_switch + ", in_bucle: " + in_bucle);
            if (in_switch == false && in_bucle == false) {
                if (res instanceof Break_1.Break) {
                    tree.lis_err.push(new NodeErr_1.NodeErr("Sintactico", "Sentencia break fuera de un ciclo ", "Break", res.line, res.column));
                    console.log("Sentencia break fuera de un ciclo " + res.line + "-" + res.column);
                }
            }
        }
        tree.arbol_ast.push("</ul>");
        if (this.ElseList.length > 0) {
            tree.arbol_ast.push("<li data-jstree='{ \"opened\" : true }'>Lista ELSE Instrucciones");
            tree.arbol_ast.push("<ul>");
            for (let i = 0; i < this.ElseList.length; i++) {
                const res = this.ElseList[i].execute(tree, in_bucle, T_return, in_switch);
                if (in_bucle == false) {
                    if (res instanceof Continue_1.Continue) {
                        tree.lis_err.push(new NodeErr_1.NodeErr("Sintactico", "Sentencia Continue fuera de un ciclo", "Continue", res.line, res.column));
                        console.log("Sentencia Continue fuera de un ciclo " + res.line + "-" + res.column);
                    }
                }
                //console.log("in_switch: " + in_switch + ", in_bucle: " + in_bucle);
                if (in_switch == false && in_bucle == false) {
                    if (res instanceof Break_1.Break) {
                        tree.lis_err.push(new NodeErr_1.NodeErr("Sintactico", "Sentencia break fuera de un ciclo ", "Break", res.line, res.column));
                        console.log("Sentencia break fuera de un ciclo " + res.line + "-" + res.column);
                    }
                }
            }
            tree.arbol_ast.push("</ul>");
        }
        tree.arbol_ast.push("</ul>");
    }
}
exports.If = If;
