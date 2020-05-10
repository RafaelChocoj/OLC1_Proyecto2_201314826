"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NodeErr {
    constructor(tipo, descripcion, linea, columna) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = (columna + 1);
    }
}
exports.NodeErr = NodeErr;
